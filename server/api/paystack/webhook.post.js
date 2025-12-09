// server/api/paystack/webhooks.post.js
import { defineEventHandler, readRawBody } from 'h3';
import * as crypto from 'crypto';
import { Query } from 'node-appwrite';

export default defineEventHandler(async (event) => {
    const config = process.env;
    const secretKey = config.PAYSTACK_SECRET_KEY;
    const signature = event.headers.get('x-paystack-signature');
    const rawBody = await readRawBody(event);
    const { databases } = useAppwrite();

  // Verify the signature
  const hash = crypto.createHmac('sha512', secretKey).update(rawBody).digest('hex');
  if (hash !== signature) {
    // Respond immediately to Paystack but don't process the request
    return { status: 'error', message: 'Invalid signature' };
  }

  // Process the webhook body (which is a JSON payload)
  const data = JSON.parse(rawBody);
  if (data.event === 'charge.success') {
    // 1. Verify the transaction again using the Paystack API (highly recommended)
    // 2. Update your database to provide value to the customer (e.g., mark order as paid)
    const document = await databases.listDocuments(
        config.DATABASE_ID,
        config.APPLICATION_COLLECTION_ID,
        [
            Query.equal('ref', data.data.reference),
            Query.limit(1)
        ]
    )

    if (document.total === 0) {
        return { status: 'error', message: 'Transaction reference not found' };
    }
    await databases.updateDocument(
        config.DATABASE_ID,
        config.APPLICATION_COLLECTION_ID,
        document.documents[0].$id,
        { payed: 'completed' }
    );

    console.log(`Transaction successful for reference: ${data.data.reference}`);
  }

  // Acknowledge receipt to Paystack
  return { status: 'success' };
});
