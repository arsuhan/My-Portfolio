<script setup>
import { reactive, ref } from 'vue'

const open = ref(true)
const states = reactive([
  {
    img: '/src/components/images/eee.png',
    title: 'E-Com Dashboard',
    subtitle: 'Developed a responsive e-commerce admin dashboard platform using html, css, Vue js, prime vue, sakai,',
    live: 'https://e-com-dashboard677.netlify.app/'
  },
  {
    img: '/src/components/images/coder boy.avif',
    title: 'Dainamic E-Shof',
    subtitle: 'Developed a responsive e-shof platform using Vue.js with a dynamic product catalog and shopping cart functionality.',
    live: 'https://dynamic-dieffenbachia-3fe431.netlify.app/'
  },
  {
    img: '/src/components/images/ppp.png',
    title: 'Perfume Web',
    subtitle: 'Developed a responsive Perfume web platform using Htlm,Css,Vue js',
    live: 'https://perfume-web-site.netlify.app/'
  },
  // {
  //   img: '/src/components/images/coder boy.avif',
  //   title: 'html',
  //   subtitle: 'Semantic markup, accessibility standards, SEO optimization Semantic markup, accessibility standards, SEO optimization',
  // },
  // {
  //   img: '/src/components/images/coder boy.avif',
  //   title: 'Perfum webSite',
  //   subtitle: 'Responsive design, animations, Flexbox/Grid layouts',
  // },
  // {
  //   img: '/src/components/images/coder boy.avif',
  //   title: 'bootstrap',
  //   subtitle: 'Modern UI Design with Bootstrap 5 Design with',
  // },

 
])

</script>

<template>

    <section id="project" class="dark:bg-[#1f242d] bg-gray-100">
  <section class="py-16 xs:-mt-4 lg:-mt-14 items-center">
    <section class="text-center my-12 xs:-mt-12 lg:mt-6">
      <h1 class="lg:text-4xl xs:text-xl font-bold font-serif">
        <span class="dark:text-white">My </span>
        <span class="text-blue-600 dark:text-cyan-400">Projects</span>
      </h1>
      <p class="mt-2 lg:text-[20px] dark:text-cyan-400">Some of my recent work</p>
      <div class="w-20 lg:h-1 xs:h-0.5 bg-blue-500 dark:bg-cyan-400 mx-auto mt-3 rounded"></div>
    </section>

    <div class="flex -mt-8">
      <section
  
  class="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 md:gap-4 lg:gap-6 xs:p-4 md:p-6"
>
<!-- data-aos="fade-up"
data-aos-anchor-placement="bottom-bottom"
data-aos-duration="1500" -->
  <div v-for="state in states" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
    class="group bg-gray-700 border-2 border-blue-500 dark:border-cyan-400 h-auto lg:w-[380px] xs:w-[290px] xs:-mx-1 md:w-[320px] lg:mx-auto md:mx-auto rounded-lg shadow-sm dark:bg-gray-800 relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2 xs:mt-5">
    
    <div class="overflow-hidden h-[250px]">
      <img
        class="w-full lg:h-full xs:h-[200px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        :src="state.img" alt="" />
    </div>

    <div
      class="absolute top-1/2 left-1/2 -mt-20 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center">
      <a :href="state.live" target="_blank"
        class="lg:w-12 lg:h-12 xs:w-12 xs:h-12 rounded-xl bg-[#00f0ff] shadow-md flex items-center justify-center lg:text-2xl xs:text-xl hover:bg-cyan-400 hover:text-white transition duration-500 hover:-translate-y-1.5 hover:shadow-cyan-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
        <i class="fas fa-external-link-alt"></i>
      </a>
      <a href="https://github.com/arsuhan?tab=repositories" target="_blank"
        class="lg:w-12 lg:h-12 xs:w-12 xs:h-12 rounded-xl bg-[#00f0ff] shadow-md flex items-center justify-center lg:text-2xl xs:text-xl hover:bg-cyan-400 hover:text-white transition duration-500 hover:-translate-y-1.5 hover:shadow-cyan-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
        <i class="fab fa-github"></i>
      </a>
    </div>


    <div class="lg:p-4 xs:p-2 xs:-mt-10 lg:-mt-1.5 md:mt-2">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-cyan-400 dark:text-cyan-400">
        {{ state.title }}
      </h5>
      <p class="mb-3 text-cyan-400 dark:text-cyan-400 text-base">
        {{ state.subtitle }}
      </p>
    </div>
  </div>
</section>
    </div>

    <section class="mt- items-center justify-center flex">
      <a href="https://github.com/arsuhan?tab=repositories" target="_blank">
        <button type="button"
          class="xs:mt-6 lg:mt- lg:text-lg xs:text-sm dark:hover:bg-cyan-400 px-5 py-2 me-2 mb-2 bg-blue-600 hover:bg-blue-700 overflow-hidden transform hover:-translate-y-2          
          shadow-white lg:px-8 xs:py-2.5 md:py-3 lg:py-3 text-white dark:text-black dark:bg-[#00f0ff] shadow-[0_0_15px_rgba(0,0,0,0.4)] rounded-full font-medium transition duration-500 hover:shadow-blue-700 dark:hover:shadow-cyan-400">
          View All Projects
        </button>
      </a>
    </section>
  </section>
</section>

</template>