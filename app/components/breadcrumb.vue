<template>
    <div class="px-5">
        <span> &#128279; </span>
        <span><NuxtLink to="/" class="hover:text-xl hover:text-gray-700 duration-900">Home</NuxtLink></span>
        <span v-if="pageRoute == ''">
            <NuxtLink> >  </NuxtLink>
        </span>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const pageRoute = route.fullPath

const routePath = pageRoute.split('/')

</script>