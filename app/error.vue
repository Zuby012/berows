<template>
    <div class="h-screen p-10 flex flex-col items-center justify-center">
        <div v-if="error.statusCode === 404" class="flex flex-col items-center gap-3">
            <NuxtImg src="/file-not-found.png" loading="lazy" alt="missing file" class="w-20"/>
            <h1 class="text-green-900 text-4xl"><b><span class="text-6xl">Error 404</span> - Page not Found</b></h1>
            <p class="text-2xl">{{ error.message }}</p>
        </div>
        <button @click="handleClearError()" class="m-5 p-5 rounded-2xl text-white bg-green-900 hover:scale-110 duration-700">&larr;return to <b>Home Page</b></button>
    </div>
</template>
<script setup>

useHead({
    title: 'Error',
})

const props = defineProps({
    error: Object
})

const handleClearError = () => {
    clearError({ redirect: '/' })
}

</script>