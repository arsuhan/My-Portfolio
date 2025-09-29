<script setup>
import { ref } from 'vue';

// ref
const showMore = ref(false); 
</script>

<template>

    <section id="about" class="lg:py-24 dark:bg-[#1f242d] bg-gray-100">
  <div class="containe xs:-mx-1 lg:mx-12 px-5 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start lg:mt-14">

    <div class="lg:w-1/2 flex justify-center lg:justify-start xs:mt-12 md:-mt-20 mx-auto duration-500 transition hover:scale-[1.03]">
      <img
        src="/images/sohan.jpg"
        alt="About Image"
        class="xs:w-[230px] xs:h-[240px] sm:w-[280px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[280px] lg:h-[320px] lg:mt-4 rounded-xl border-2 border-cyan-400 object-cover shadow-[0_0_25px_rgba(0,0.2)] shadow-cyan-400 duration-500 transition"
      />
    </div>


    <div class="lg:-mt-20 w-full text-black md:mt-10 xs:mt-10">
      <h1 class="lg:text-2xl xs:text-xl sm:text-xl font-bold font-serif mb-4 text-center lg:text-left">
        <h1 class=" text-cyan-400">About Me</h1>
      </h1>

      <!-- -->

      <ul class="mt-6 space-y-2 text-xs sm:text-base text-white xs:text-[14px] md:text-[16px] lg:text-[18px] xs:-mx-1">
        <li class="flex md:justify-center lg:justify-start">
          <span class="text-base text-center font-semibold lg:text-left text-white mb-2 lg:text-xl lg:mt-1">Junior Wb Developer</span>
        </li>
      </ul>

      <p class="text-white mb-6 xs:mt-3 xs:text-[14px] lg:text-[18px] md:text-[16px] xs:-mx-1 md:text-center lg:text-start">
          Worked closely with clients to understand their needs, ensuring that each project met their specific
          requirements and goals.
      </p>
      <!-- ... -->

      <div class="flex flex-col gap-4 w-full md:w-auto items-center lg:items-start mt-4 md:items-center md:flex md:justify-center md:mt-8">
         <div>
    <p>
    </p>

    <div class="md:items-center md:flex md:justify-center lg:items-start lg:justify-start xs:items-center xs:flex xs:justify-center">
    </div>
  </div>
        </div>
    </div>
  </div>
</section>
</template>

<style scoped>
</style>