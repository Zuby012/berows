// server/api/paystack/webhooks.post.js
import { defineEventHandler, readRawBody } from 'h3';
import * as crypto from 'crypto';

export default defineEventHandler(async (event) => {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  const signature = event.headers.get('x-paystack-signature');
  const rawBody = await readRawBody(event);

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
    console.log(`Transaction successful for reference: ${data.data.reference}`);
  }

  // Acknowledge receipt to Paystack
  return { status: 'success' };
});
