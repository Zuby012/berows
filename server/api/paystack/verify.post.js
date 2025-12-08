import axios from "axios";
import { ID } from 'node-appwrite';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { reference, email, regNum, amount } = body;
  const { databases } = useAppwrite();

  try {
    const res = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        },
      }
    );

    // If transaction is successful, store details in Appwrite
    const config = process.env;
    if (res.data.data.status === 'success') {

      if (!reference || !email || !regNum || !amount) {
        throw createError({ statusMessage: 'Title is required', statusCode: 400 });
      }
      // Store transaction details in Appwrite database
      const document = await databases.createDocument(
        config.DATABASE_ID,
        config.APPLICATION_COLLECTION_ID,
        ID.unique(),
        { ref:reference, jamb_reg:regNum, amount:amount, email:email, } // Data payload
      );
      return { status: 'success', message: 'Payment verified and recorded successfully', document };
    }

    return res.data.data;
  } catch (err) {
    return { status: false, message: err.message };
  }
});