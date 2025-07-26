<script setup>
import { reactive, ref } from 'vue'

const open = ref(true)
const states = reactive([
  {
    img: '/images/html.png',
    title: 'html',
    subtitle: 'Semantic markup, accessibility standards, SEO optimization',
    subtitle1: 'Semantic tags, SEO, a11y',
  },
  {
    img: '/images/css.png',
    title: 'css',
    subtitle: 'Responsive design, animations, Flexbox/Grid layouts',
     subtitle1: 'Alignment Structure Motion Grid',
  },
  {
    img: '/images/bootstrap.png',
    title: 'bootstrap',
    subtitle: 'Modern UI design with bootstrap 5 design with',
    subtitle1: 'Bootstrap 5 UI Design',
  },
  {
    img: '/images/js.png',
    title: 'java script',
    subtitle: 'ES6+, DOM manipulation, async programming',
    subtitle1: 'ES6, DOM, Async /Await',
  },
  {
    img: '/images/tailwind.png',
    title: 'tailwind css',
    subtitle: 'Designing Custom Layouts with Tailwind CSS',
    subtitle1: 'Utility-first Layouts',
  },
  {
    img: '/images/vue.png',
    title: 'vue js',
    subtitle: 'Frontend Web Development using Vue.js',
    subtitle1: 'Vue 3, Components, Props',
  },
  {
    img: '/images/flowbite.png',
    title: 'flowbite',
    subtitle: 'Interactive UI Elements with Flowbite,',
    subtitle1: 'UI Kit + Tailwind CSS',
  },
  {
    img: '/images/mongodb.png',
    title: 'mongodb',
    subtitle: 'Data Storage and Retrieval using MongoDB',
    subtitle1: 'NoSQL, CRUD, Atlas DB',
  },
  {
    img: '/images/github.png',
    title: 'git hub',
    subtitle: 'Version control, GitHub, CI/CD workflows',
    subtitle1: 'Git, Commits, CI/CD'
  },
  {
    img: '/images/firebase.png',
    title: 'firebase',
    subtitle: 'Building Real-Time Applications with Firebase',
    subtitle1: 'Auth, DB, Hosting',
  },
])

</script>

<template>
    <section id="skill" class="dark:bg-[#1f242d] bg-gray-100">
  <section class="py-14 xs:-mt-4 lg:-mt-24 items-center">
    <section class="text-center my-12 xs:-mt-10">
      <h1 class="lg:text-4xl xs:text-xl lg:mt-8 font-serif font-bold">
        <span class="dark:text-white">My </span>
        <span class=" text-blue-700 dark:text-cyan-400">Skills</span>
      </h1>
      <p class="mt-2 lg:text-[20px] dark:text-white">Technologies I work with</p>
      <div class="w-20 lg:h-1 xs:h-0.5 bg-cyan-500 mx-auto mt-3 rounded"></div>
    </section>

    <section 
     data-aos="zoom-in"
     data-aos-duration="5000"
      class="w-full xs:mt-12 lg:mt-14 px-3 md:px-12 flex-wrap lg:gap-4 md:gap-4 xs:gap-2 grid xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
    >
    <!-- xs:w-[280px] xs:h-[200px] -->

      <div v-for="state in states"
     
     class="w-full lg:w-full md:w-full xs:w-full h-auto xs:h-[144px] md:h-[200px] p-3 lg:p-6 bg-gray-800 rounded-lg dark:bg-gray-900 dark:border-gray-700 transition-transform duration-500 
      xs:border-2 lg:border-4 dark:border-2 lg:dark:border-4 border-transparent border-gray-600 hover:border-blue-700 dark:hover:border-cyan-400 hover:scale-[1.03] sm:w-[30px] lg:h-[240px] xs:p-3 md:p-5"
>
      
        <div class="bg-gray-300 p-3 rounded-full flex text-blue-600 lg:w-16 lg:h-16 xs:w-11 xs:h-11 justify-center items-center">
                  <img class="lg:w-[38px] lg:h-[38px] xs:w-[30px] xs:h-[22px]" :src="state.img" alt="" />
        </div>
        <div class="">
          <h1 class="lg:text-2xl xs:text-[13.5px] md:text-lg text-cyan-400 uppercase font-bold mt-4">
          {{ state.title }}
        </h1>
        <p class="hidden md:block md:text-xl lg:text-[18px] md:text-[16px] mb-3 md:mt-3 lg:mt-4 font-normal text-cyan-200 dark:text-cyan-300">
          {{ state.subtitle }}
        </p>
        <p class="block lg:hidden md:hidden xs:text-[13px] md:text-xl lg:text-xl mb-3 md:mt-3 lg:mt-4 font-normal text-cyan-200 dark:text-cyan-300 mt-1">
          {{ state.subtitle1 }}
        </p>
        </div>
      </div>
    </section>
  </section>
</section>
</template>