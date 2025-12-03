<template>
    <body>
        <header class="bg-green-900 p-5">
            <Header></Header>
        </header>
        <main class="p-10 w-full flex flex-col gap-5">
            <h1 class="text-4xl font-bold">About Berows University.</h1>
            <h2 class="text-2xl font-bold">Where Tradition Meets Innovation.</h2>
            <p>
                <b>Welcome to Berows University</b>. For over [Number] years, we have been more than just a place of learning; 
                we are a community dedicated to the pursuit of truth, the creation of new knowledge, and the service of humanity. 
                Our campus is a vibrant hub where diverse minds converge to shape the future.
            </p>
            <NuxtImg src="/map.jpg" loading="lazy" format="webp" />
            <figure class="w-full flex justify-center items-center font-bold">Berows University Campus map.</figure>
            <h3 class="text-2xl font-bold">Who We Are</h3>
            <p>
                At Berows University, we believe that education is the catalyst for transformation. 
                We are a Private, research-intensive institution committed to providing a rigorous, 
                world-class education that prepares students not just for careers, but for lives of impact.
            </p>
            <h4 class="text-xl font-bold">Our Mission</h4>
            <p>
                Our mission is to educate leaders who will make a difference in the world. 
                We are dedicated to fostering an environment of intellectual curiosity, ethical responsibility, 
                and global citizenship. Through innovative teaching, groundbreaking research, and community engagement, 
                we strive to address the complex challenges of our time.
            </p>
            <h4 class="text-xl font-bold">Our Vision</h4>
            <p>
                We envision a world where knowledge knows no bounds, where innovation drives progress, 
                and where every individual has the opportunity to realize their full potential. 
                Berows University aspires to be a beacon of excellence, inclusivity, and social impact on a global scale.
            </p>
            <h4 class="text-xl font-bold">Our Values</h4>
            <ul>
                <li><b>Excellence:</b> We are committed to the highest standards in teaching, research, and service.</li>
                <li><b>Integrity:</b> We uphold honesty, transparency, and ethical behavior in all our endeavors.</li>
                <li><b>Diversity:</b> We celebrate and embrace the richness of diverse perspectives and experiences.</li>
                <li><b>Innovation:</b> We encourage creativity and forward-thinking to drive positive change.</li>
                <li><b>Community:</b> We foster a supportive and collaborative environment for all members of our university family.</li>
            </ul>
            <h3 class="text-2xl font-bold">A Legacy of Excellence (Our History)</h3>
            <p>
                Founded in 1923, Berows University has a storied history of academic excellence and societal contribution. 
                From our humble beginnings as a small college, we have grown into a leading institution recognized for our 
                pioneering research, distinguished faculty, and accomplished alumni. Our journey is marked by milestones 
                that reflect our unwavering commitment to education and innovation.
            </p>
            <h3 class="text-2xl font-bold">Leadership & Administration</h3>
            <p>
                Our university is led by a team of visionary leaders dedicated to advancing our mission and vision. 
                Under the guidance of our Chancellor, Vice-Chancellor, and Board of Trustees, we are charting a course 
                for continued growth and impact in the years to come.
            </p>
            <h4 class="text-xl font-bold">Message from the Vice Chancellor</h4>
            <p>
                "At Berows University, we are more than an institution; we are a community united by a shared purpose. 
                Together, we are shaping the future through education, research, and service. I invite you to join us 
                on this exciting journey of discovery and impact."
            </p>
            <h3 class="text-2xl font-bold">Join Us</h3>
            <p>
                We invite you to explore our website, learn more about our programs and initiatives, 
                and consider joining the Berows University community. Whether you are a prospective student, 
                faculty member, researcher, or partner, there are countless opportunities to get involved 
                and make a difference.
            </p>
            <NuxtLink to="/contact" class="text-white bg-green-900 px-5 py-3 rounded-2xl w-40 font-bold flex justify-center items-center">Contact Us</NuxtLink>
        </main>
        <footer class="bg-gray-700 p-5">
            <Footer></Footer>
        </footer>
    </body>
</template>
<script setup>

useHead({
    title: 'About',
})

</script>