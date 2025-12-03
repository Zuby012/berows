<template>
    <div class="text-white text-xs md:text-md lg:text-lg px-5 py-3 flex justify-between items-center gap-2">
        <div class="flex flex-col gap-1">
            <span class="text-lg md:text-xl font-extrabold">BEROWS UNIVERSITY</span>
            <span>Scientia Et Sapientia</span>
        </div>
        <div>
            <nav class="hidden md:block">
                <ul class="grid grid-cols-2 lg:flex justify-center items-center gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/admission">Admission</NuxtLink></li>
                    <li><NuxtLink to="/academics">Academics</NuxtLink></li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                </ul>
            </nav>
        </div>
        <div class="flex flex-col items-end gap-1">
            <span class="text-xl"><b>Contact Us</b></span>
            <span><a href="mailto:berows@berows.com">Email: berows@berows.com</a></span>
            <span><a href="tel:+234 345 456 7890">Phone: +234 345 456 7890</a></span>
        </div>
    </div>
</template>