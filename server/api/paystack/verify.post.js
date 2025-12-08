import axios from "axios";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { reference } = body;

  try {
    const res = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        },
      }
    );

    return res.data;
  } catch (err) {
    return { status: false, message: err.message };
  }
});