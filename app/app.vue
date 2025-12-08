<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://js.paystack.co/v1/inline.js",
      defer: true,
    },
  ],
});
</script>
