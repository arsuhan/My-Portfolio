<script setup>
import { reactive, ref } from 'vue'

const open = ref(true)
const states = reactive([
  {
    img: '/images/eee.png',
    title: 'E-Com Dashboard',
    subtitle:
      'Developed a responsive e-commerce admin dashboard platform using html, css, Vue js, prime vue, sakai,',
    live: 'https://e-com-dashboard677.netlify.app/',
  },
  {
    img: '/images/ppp.png',
    title: 'Perfume Web',
    subtitle: 'Developed a responsive Perfume web platform using Htlm,Css,Vue js',
    live: 'https://perfume-web-site.netlify.app/',
  },
  {
    img: '/images/esof.png',
    title: 'Dainamic E-Shof',
    subtitle:
      'Developed a responsive e-shof platform using Vue.js with a dynamic product catalog and shopping cart functionality.',
    live: 'https://dynamic-dieffenbachia-3fe431.netlify.app/',
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
  <section id="project" class="bg-[#1f242d]">
    <section class="py-8 items-center">
      <section class="text-center">
        <h1 class="lg:text-2xl xs:text-xl md:mt-2 font-bold font-serif lg:mt-4 xs:-mt-4">
          <span class="text-white">My </span>
          <span class="text-cyan-400">Projects</span>
        </h1>
        <p class="mt-2 lg:text-[20px] text-white">Some of my recent work</p>
        <div class="w-20 lg:h-1 xs:h-0.5 bg-blue-500 dark:bg-cyan-400 mx-auto mt-3 rounded"></div>
      </section>

      <div class="flex lg:mt-0.5 md:-mt-4">
        <section
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xs:gap-1 md:gap-3 mx-1.5 md:mx-0 lg:mx-auto xs:p-2 md:p-9"
        >
          <div
            v-for="state in states"
            class="group bg-gray-700 border-2 border-cyan-400 md:h-[340px] md:w-[220px] lg:h-[380px] lg:w-[360px] rounded-lg shadow-sm dark:bg-gray-800 relative overflow-hidden transform transition-all duration-500 hover:-translate-y-2 xs:mt-7 md:mt-4"
          >
            <div class="overflow-hidden h-[240px]">
              <img
                class="lg:w-full lg:h-[220px] xs:h-[230px] md:h-[180px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                :src="state.img"
                alt=""
              />
            </div>

            <!-- Hover buttons -->
            <div
              class="absolute top-1/2 left-1/2 -mt-20 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-6 items-center justify-center"
            >
              <a
                :href="state.live"
                target="_blank"
                class="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#00f0ff] shadow-md flex items-center justify-center lg:text-2xl xs:text-xl hover:bg-cyan-400 hover:text-white transition duration-500 hover:-translate-y-1.5 hover:shadow-cyan-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
              >
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a
                href="https://github.com/arsuhan?tab=repositories"
                target="_blank"
                class="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-[#00f0ff] shadow-md flex items-center justify-center lg:text-2xl xs:text-xl hover:bg-cyan-400 hover:text-white transition duration-500 hover:-translate-y-1.5 hover:shadow-cyan-400 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
              >
                <i class="fab fa-github"></i>
              </a>
            </div>

            <!-- Card content -->
            <div class="p-4 md:-mt-16 lg:-mt-4">
              <h5
                class="mb-2 lg:text-2xl md:text-base font-bold tracking-tight text-cyan-400 dark:text-cyan-400"
              >
                {{ state.title }}
              </h5>
              <p class="mb-3 text-cyan-400 dark:text-cyan-400 md:text-sm lg:text-base">
                {{ state.subtitle }}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section class="mt- items-center justify-center flex">
        <a href="https://github.com/arsuhan?tab=repositories" target="_blank">
          <button
            type="button"
            class="xs:mt-6 lg:mt- lg:text-lg xs:text-sm px-5 py-2 me-2 mb-2 overflow-hidden transform hover:-translate-y-2 shadow-white xs:py-2.5 lg:py-2.5 md:py-3 text-black bg-[#00f0ff] hover:bg-[#1f242d] hover:text-white shadow-[0_0_6px_rgba(0,0,0,0.4)] rounded-lg font-semibold transition duration-500 hover:shadow-cyan-400"
          >
            View All Projects
          </button>
        </a>
      </section>
    </section>
  </section>
</template>
