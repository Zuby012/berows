<template>
    <header class="">
        <Header></Header>
    </header>
    <main class="p-5">
        <NuxtLink to="/admission">&larr; admission</NuxtLink>
        <div v-for="(program, index) in programDetails" :key="index">
            <div v-if="program.name === pageRoute" class="max-w-4xl mx-auto my-5 bg-gray-100 p-5 rounded-lg shadow-md">
                <h1 class="text-3xl font-bold mb-4">{{ program.name }}</h1>
                <p class="mb-4">{{ program.description }}</p>
                <ul class="list-disc list-inside">
                    <li><strong>Duration:</strong> {{ program.duration }}</li>
                    <li><strong>Degree Awarded:</strong> {{ program.degree }}</li>
                </ul>
            </div>
        </div>
        <NuxtLink to="/apply" target="_blank" class="mx-40 my-10 px-5 py-3 text-white bg-green-900 rounded-lg shadow-md">Apply Now</NuxtLink>
    </main>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const pageRoute = route.params.id

useHead({
    title: pageRoute,
    meta: [
        { name: 'description', content: 'Detailed information about our academic programs at Berows University.' },
        { name: 'keywords', content: 'Berows University, Programs, Courses, Education, Academic Programs' },
    ],
});

const programDetails = [
    {
        name: 'Computer Science',
        description: 'Study of computers and computational systems.',
        duration: '4 years',
        degree: 'Bachelor of Science'
    },
    {
        name: 'Business Administration',
        description: 'Focus on business management and operations.',
        duration: '4 years',
        degree: 'Bachelor of Business Administration'
    },
    {
        name: 'Mechanical Engineering',
        description: 'Design and manufacture of mechanical systems.',
        duration: '4 years',
        degree: 'Bachelor of Engineering'
    },
    {
        name: 'Psychology',
        description: 'Study of mind and behavior.',
        duration: '4 years',
        degree: 'Bachelor of Arts'
    },
    {
        name: 'Economics',
        description: 'Study of production, consumption, and transfer of wealth.',
        duration: '4 years',
        degree: 'Bachelor of Arts'
    },
    {
        name: 'Civil Engineering',
        description: 'Design and construction of infrastructure projects.',
        duration: '5 years',
        degree: 'Bachelor of Engineering'
    },
    {
        name: 'Medicine',
        description: 'Comprehensive medical education and training.',
        duration: '6 years',
        degree: 'Doctor of Medicine'
    },
    {
        name: 'Architecture',
        description: 'Art and science of designing buildings.',
        duration: '5 years',
        degree: 'Bachelor of Architecture'
    },
    {
        name: 'Accounting',
        description: 'Study of financial reporting and analysis.',
        duration: '4 years',
        degree: 'Bachelor of Science'
    },
    {
        name: 'Law',
        description: 'Comprehensive legal education and training.',
        duration: '5 years',
        degree: 'Bachelor of Laws'
    },
    {
        name: 'Nursing',
        description: 'Training in patient care and healthcare practices.',
        duration: '4 years',
        degree: 'Bachelor of Science in Nursing'
    },
    {
        name: 'Marketing',
        description: 'Study of market research and advertising strategies.',
        duration: '4 years',
        degree: 'Bachelor of Business Administration'
    },
    {
        name: 'Biology',
        description: 'Study of living organisms and life processes.',
        duration: '4 years',
        degree: 'Bachelor of Science'
    },
    {
        name: 'Mass Communication',
        description: 'Study of media, journalism, and public relations.',
        duration: '4 years',
        degree: 'Bachelor of Arts'
    },
    {
        name: 'Electrical Engineering',
        description: 'Design and application of electrical systems.',
        duration: '5 years',
        degree: 'Bachelor of Engineering'
    },
    {
        name: 'Science Laboratory Technology',
        description: 'Training in laboratory techniques and procedures.',
        duration: '4 years',
        degree: 'Bachelor of Science'
    },

]
</script>