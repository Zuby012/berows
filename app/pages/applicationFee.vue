<template>
<header class="w-full flex flex-col gap-1 items-start">
        <NuxtImg src="/logo1.1.png" alt="Berows logo" format="webp" loading="lazy" class="w-25 h-20" />
        <NuxtLink to="/apply" class="px-1 text-green-900 font-bold underline">&larr; application form</NuxtLink>
    </header>
    <main class="w-full h-screen flex justify-center">
        <div class="h-fit bg-gray-200 p-10 rounded-2xl shadow-xl flex flex-col gap-5">
            <div class="text-2xl font-bold">
                <p>Pay Application Fee to be Eligible for Screening.</p>
            </div>
            <form @submit.prevent="initializePayment" class="flex flex-col gap-2">
                <input type="email" placeholder="email" v-model="props.email" class="py-3 px-2 border-2 border-black">
                <input type="text" placeholder="jamb reg number" v-model="props.regNum" class="py-3 px-2 border-2 border-black">
                <button type="submit" class="px-5 py-3 rounded-lg bg-green-900 text-white hover:scale-105 hover:shadow-lg duration-700">Pay Application Fee</button>
            </form>
        </div>
    </main>
</template>
<script setup>

useHead({
    title: 'Application Fee',
})

onMounted(() => {
  const script = document.createElement("script");
  script.setAttribute("src", "https://js.paystack.co/v1/inline.js");
  document.body.appendChild(script);
});


const props = ref({
    publicKey: 'pk_test_72a79bf619f4c679e607809c5a641f4e6b793013',
    email: '',
    regNum: '',
    amount: 5_000, // amount 
    refSalt: Math.floor((Math.random() * 1_000_000_000) + 1) * Math.floor((Math.random() * 1_000_000_000) + 1),
});

const initializePayment = () => {
  const handler = PaystackPop.setup({
    key: props.value.publicKey, // public key
    email: props.value.email, // user email
    regNum: props.value.regNum, // user jamb reg number
    amount: props.value.amount * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
    ref: `ref-${new Date().getSeconds()}${props.value.refSalt}`, // Replace with a reference you generated
    
    callback: function (response) {
        //this happens after the payment is completed successfully
        var reference = response.reference;
        //########alert("Payment complete! Reference: " + reference);

        //this happens after the payment is completed successfully
        navigateTo('/apply')

        // Make an AJAX call to your server with the reference to verify the transaction
        verifyPayment(reference);
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });
  handler.openIframe();
};

const verifyPayment = async (reference) => {
    try {
        const response = await $fetch('/api/paystack/verify', {
            method: 'POST',
            body: { 
                reference: reference,
                email: props.value.email,
                regNum: props.value.regNum,
                amount: props.value.amount,
            },
        });
        if (response.status === 'success') {
            alert('Payment verified successfully!');
        } else {
            alert('Payment verification failed. Please contact support.');
        }
    } catch (error) {
        alert('Error verifying payment. Please try again later.');
    }
};

</script>