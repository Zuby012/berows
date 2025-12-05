<template>
    <header class="">
        <Header></Header>
    </header>
    <main class="w-full border-y-2 border-white rounded-2xl md:grid md:grid-cols-2">
        <!--section 1-->
        <div class="bg-gray-100 py-10 px-3 md:pr-10 flex flex-col md:items-end gap-5">
            <div class="flex md:justify-end items-end gap-1">
                <span class="flex flex-col gap-1">
                    <h1 class="font-bold font-serif text-2xl">Start at Berows</h1>
                    <NuxtLink class="w-fit px-5 py-3 rounded-lg bg-green-900 text-white">Apply Now</NuxtLink>
                </span>
                <NuxtImg src="/img1.1.png" format="webp" loading="lazy" alt="img" class="w-20 hidden md:block" />
            </div>
            <div class="w-full flex flex-col items-center text-sm">
                <span class="text-lg font-bold font-serif">Why Choose Berows?</span>
                <div class="w-full p-5 flex justify-around gap-4 md:gap-2">
                    <div class="flex flex-col items-center">
                        <span><img src="/student.svg" alt="student-svg" class="w-10" /></span>
                        <span class="font-bold text-green-900">World Class Faculty</span>
                        <p>Berows University is professionals what setares or mates frading in content university.</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <span><img src="/school-building.svg" alt="student-svg" class="w-10" /></span>
                        <span class="font-bold text-green-900">Vibrant Campus Life</span>
                        <p>Application deadline - we try to meeting the woks to cheat the application deadline</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <span><img src="/briefcase.svg" alt="student-svg" class="w-10" /></span>
                        <span class="font-bold text-green-900">Career Opportunity</span>
                        <p>Learn how to apply or even to take on opportunities in line with your career</p>
                    </div>
                </div>
            </div>
        </div>
        <!--section 2-->
        <div class="bg-green-900 text-white py-10 pl-10 flex flex-col items-start justify-center gap-3">
            <h2 class="w-full font-bold text-lg font-serif">How to Apply</h2>
            <div class="flex flex-wrap gap-4">
                <div class="flex flex-col items-center py-3 pr-3 md:border-r-2 border-white">
                    <span class="text-4xl text-amber-600 font-serif font-bold">1.</span>
                    <p>Create an account</p>
                </div>
                <div class="flex flex-col items-center py-3 pr-3 md:border-r-2 border-white">
                    <span class="text-4xl text-amber-600 font-serif font-bold">2.</span>
                    <p>Register online</p>
                </div>
                <div class="flex flex-col items-center py-3">
                    <span class="text-4xl text-amber-600 font-serif font-bold">3.</span>
                    <p>Upload O'level result to Jamb</p>
                </div>
            </div>
        </div>
        <!--section 3-->
        <div class="bg-green-900 text-white py-10 px-10 flex flex-col items-center">
            <h2 class="font-bold font-serif text-lg">Programs of Study</h2>
            <div class="w-full flex flex-wrap gap-4 mt-5">
                <div v-for="(program, index) in programs" :key="index">
                    <NuxtLink :to="`/programs/${program.name}`" class="flex justify-between gap-3 px-5 py-3 bg-green-800 rounded-lg">
                        <span class="font-bold">{{ program.name }} - </span>
                        <span>{{ program.duration }}</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!--section 4-->
        <div class="bg-gray-100 px-3 md:pl-10 flex flex-col items-start justify-center py-10">
            <h2 class="font-bold font-serif text-lg">Financial Aid and Scholarship</h2>
            <p class="mt-5">
                Berows University is committed to making higher education accessible and affordable for all students. 
                We offer a range of financial aid options, including scholarships, grants, and work-study programs, 
                to help ease the financial burden of tuition and other expenses. Our dedicated financial aid team is here to assist you in 
                navigating the application process and finding the best solutions to meet your needs. Explore our financial aid opportunities 
                and take the first step towards achieving your academic goals at Berows University.
                <NuxtLink to="" class="text-green-900 underline font-bold">Apply for Scholarship</NuxtLink>
            </p>
        </div>
    </main>
    <footer>
        <Footer></Footer>
    </footer>
</template>
<script setup>
useHead({
    title: 'admission',
})

const programs = [
    { name: 'Accounting', duration: '4 years' },
    { name: 'Architecture', duration: '5 years' },
    { name: 'Biology', duration: '4 years' },
    { name: 'Business Administration', duration: '4 years' },
    { name: 'Civil Engineering', duration: '5 years' },
    { name: 'Computer Science', duration: '4 years' },
    { name: 'Economics', duration: '4 years' },
    { name: 'Electrical Engineering', duration: '5 years' },
    { name: 'Law', duration: '5 years' },
    { name: 'Marketing', duration: '4 years' },
    { name: 'Mass Communication', duration: '4 years' },
    { name: 'Mechanical Engineering', duration: '5 years' },
    { name: 'Medicine', duration: '6 years' },
    { name: 'Nursing', duration: '4 years' },
    { name: 'Psychology', duration: '4 years' },
    { name: 'Science Laboratory Technology', duration: '4 years' },
]
</script>