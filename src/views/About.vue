<script setup>
import { ref } from 'vue'

const showMore = ref(false)
</script>

<template>
  <section id="about" class="py-4 bg-[#1f242d]">
    <!--  -->
    <div
      class="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 px-6 lg:px-20"
    >
      <!-- Left Image -->
      <div class="lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="/images/sohan.png"
          alt="About Image"
          class="rounded-xl border lg:mt-24 md:-mt-36 xs:mt-8 border-cyan-400 shadow-lg xs:w-[240px] xs:h-[260px] sm:w-[280px] sm:h-[280px] lg:w-[290px] lg:h-[370px] duration-500 transition hover:scale-[1.03]"
        />
      </div>

      <!-- Right Content -->
      <div class="lg:w-full xs:-mx-3 h-auto bg-gray-700 p-5 md:p-10 rounded-xl xs:mt-8 md:mx-5">
        <!-- Heading -->
        <h1 class="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">About Me</h1>

        <!-- Short Intro -->
        <p class="text-gray-200 mb-6 text-[16px] sm:text-base leading-relaxed">
          Hello! My full name is Aminur Rahman, and my nickname is Suhan. I’m from Habiganj, Sylhet,
          and I’m currently studying at Habiganj Polytechnic Institute. I have a deep passion for
          technology and programming, and I’m constantly striving to expand my knowledge in the
          field of web development. I enjoy building beautiful, responsive user interfaces and
          exploring how things work behind the scenes.
        </p>

        <!-- Skills -->
        <ul class="space-y-2 text-gray-200 text-sm sm:text-base">
          <li>
            🔹 <b>Frontend Focus:</b> Vue.js, Next.js, Tailwind CSS, <b>JavaScript, TypeScript !</b>
          </li>
          <li>🔹 <b>Backend:</b> MongoDB, Mongoose, PostgreSQL, Express.js, Node.js, Firebase !</li>
          <li>🔹 <b>Development Tools:</b> vscode, git, github, postman, netlify !</li>
        </ul>

        <!-- Goals -->
        <div class="mt-6">
          <ul class="space-y-2 text-gray-200">
            <li>✅ Collaborate with other developers</li>
            <li>✅ Contribute to Open Source projects</li>
            <li>✅ Keep up with the latest web technologies</li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="mt-6">
          <!-- <h2 class="text-lg font-semibold text-red-600 mb-2"></h2> -->
          <p class="text-gray-200">📧 :- aminurrahmansuhan@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>
