<script setup>
import { reactive, ref, computed } from 'vue'

const filterType = ref('all') //

const states = reactive([
  // Group 1
  {
    img: '/images/html.png',
    title: 'html',
    subtitle: 'Semantic markup, accessibility standards, SEO optimization',
    subtitle1: 'Semantic tags, SEO, a11y',
    group: 'group1'
  },
  {
    img: '/images/css.png',
    title: 'css',
    subtitle: 'Responsive design, animations, Flexbox/Grid layouts',
     subtitle1: 'Alignment Structure Motion Grid',
     group: 'group1'
  },
  {
    img: '/images/bootstrap.png',
    title: 'bootstrap',
    subtitle: 'Modern UI design with bootstrap 5 design with',
    subtitle1: 'Bootstrap 5 UI Design',
    group: 'group1'
  },
  {
    img: '/images/js.png',
    title: 'java script',
    subtitle: 'ES6+, DOM manipulation, async programming',
    subtitle1: 'ES6, DOM, Async /Await',
    group: 'group1'
  },
  {
    img: '/images/tailwind.png',
    title: 'tailwind css',
    subtitle: 'Designing Custom Layouts with Tailwind CSS',
    subtitle1: 'Utility-first Layouts',
    group: 'group1'
  },
  {
    img: '/images/vue.png',
    title: 'vue js',
    subtitle: 'Frontend Web Development using Vue.js',
    subtitle1: 'Vue 3, Components, Props',
    group: 'group1'
  },
  {
    img: '/public/vite.png',
    title: 'vite',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group1'
  },
  {
    img: '/images/flowbite.png',
    title: 'flowbite',
    subtitle: 'Interactive UI Elements with Flowbite,',
    subtitle1: 'UI Kit + Tailwind CSS',
    group: 'group1'
  },

  // backend

  {
    img: '/images/firebase.png',
    title: 'firebase',
    subtitle: 'Building Real-Time Applications with Firebase',
    subtitle1: 'Auth, DB, Hosting',
     group: 'group2'
  },
  {
    img: '/images/mongodb.png',
    title: 'mongodb',
    subtitle: 'Data Storage and Retrieval using MongoDB',
    subtitle1: 'NoSQL, CRUD, Atlas DB',
     group: 'group2'
  },

  // Group 2


  // tools
  {
    img: '/public/figma.png',
    title: 'figma',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group3'
  },
  {
    img: '/images/github.png',
    title: 'git hub',
    subtitle: 'Version control, GitHub, CI/CD workflows',
    subtitle1: 'Git, Commits, CI/CD',
    group: 'group3'
  },
  {
    img: '/public/git.png',
    title: 'git',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group3'
  },
  {
    img: '/images/netlify.png',
    title: 'netlify',
    subtitle: 'Deploy Stunning Websites on Netlify',
    subtitle1: 'Deploy Stunning Websites on Netlify',
    group: 'group3'
  },
  {
    img: '/images/postman.png',
    title: 'postman',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group3'
  },
  {
    img: '/public/canva.png',
    title: 'canva',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group3'
  },
  {
    img: '/public/vscode.png',
    title: 'vscode',
    subtitle: 'Test and Debug APIs Effortlessly',
    subtitle1: 'Test and Debug APIs Effortlessly',
    group: 'group3'
  },
  // tools end
])

// Filter
const filteredStates = computed(() => {
  if (filterType.value === 'all') return states
  return states.filter(item => item.group === filterType.value)
})
</script>

<template>
<section id="skill" class="bg-[#1f242d]">
  <section class="py-8 items-center">
    <section class="text-center">
      <h1 class="lg:text-2xl xs:text-xl font-serif font-bold xs:mt-2 md:mt-2 lg:-mt-5">
        <span class="text-cyan-400">My Skills</span>
      </h1>
      <p class="mt-2 text-white">Technologies I work with</p>
      <div class="w-20 lg:h-1 xs:h-0.5 bg-cyan-500 mx-auto mt-3 rounded"></div>
    </section>

    <!-- Filter Buttons -->
    <div class="flex justify-center gap-4 mt-6">
      <button @click="filterType = 'all'" 
        :class="['px-6 py-2 rounded-full text-sm font-medium', filterType==='all' ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white hover:bg-cyan-600']">
        All
      </button>
      <button @click="filterType = 'group1'" 
        :class="['px-4 py-2 rounded-full text-sm font-medium', filterType==='group1' ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white hover:bg-cyan-600']">
        Frontend
      </button>
      <button @click="filterType = 'group2'" 
        :class="['px-4 py-2 rounded-full text-sm font-medium', filterType==='group2' ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white hover:bg-cyan-600']">
        Backend
      </button>
      <button @click="filterType = 'group3'" 
        :class="['px-4 py-2 rounded-full text-sm font-medium', filterType==='group3' ? 'bg-cyan-400 text-black' : 'bg-gray-800 text-white hover:bg-cyan-600']">
        Tools
      </button>
    </div>

    <section class="w-full xs:mt-8 lg:mt-16 xs:px-3 md:px-12 lg:px-20 grid lg:gap-4 md:gap-4 xs:gap-2 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      <div
        v-for="(state, index) in filteredStates"
        :key="index"
        class="w-full h-auto xs:h-[144px] md:h-[160px] p-3 rounded-lg bg-gray-900 transition-transform duration-500 
               xs:border border-cyan-700 hover:border-1.5 hover:border-cyan-400 hover:scale-[1.03] lg:h-[175px] xs:p-3 md:p-5 hover:shadow-lg shadow"
      >
        <div class="bg-gray-300 p-3 rounded-full flex text-blue-600 lg:w-14 lg:h-14 xs:w-11 xs:h-11 justify-center items-center">
          <img class="lg:w-[30px] lg:h-[30px] xs:w-[26px] xs:h-[18px]" :src="state.img" alt="" />
        </div>
        <div>
          <h1 class="xs:text-[13.5px] lg:text-base md:text- text-cyan-400 uppercase font-bold lg:mt-3 md:mt-2 xs:mt-3">{{ state.title }}</h1>
          <p class="lg:text-sm xs:text-[12px] mb-3 xs:mt-1 lg:mt-2 font-normal text-white dark:text-cyan-300">
            {{ state.subtitle1 }}
          </p>
        </div>
      </div>
    </section>
  </section>
</section>
</template>