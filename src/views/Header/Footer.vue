<template>
  <footer class="bg-gray-800 text-white py-10 px-4">
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between lg:gap-32 xs:gap-6 text-center md:text-left"
    >
      <!-- Logo and Description Section -->
      <div class="mb-6 md:mb-0">
        <h1 class="lg:text-4xl xs:text-xl font-bold xs:flex xs:justify-center xs:items-center">
          <span class="text-white">Aminur</span>
          <span class="text-cyan-400">Rahman</span>
        </h1>
        <p
          class="text-gray-200 xs:text-[12px] lg:text-[18px] lg:mt-4 xs:mt-2 xs:flex xs:justify-center xs:items-center"
        >
          Web Developer & UI Enthusiast
        </p>
      </div>

      <!-- Quick Links Section -->
      <div class="flex-1">
        <h3 class="lg:text-xl font-bold mb-2">Quick Links</h3>
        <div class="w-10 h-1 bg-cyan-500 mx-auto md:mx-0 mb-4"></div>
        <ul class="space-y-1">
          <li><a href="#home" class="hover:underline hover:text-cyan-400">Home</a></li>
          <li><a href="#about" class="hover:underline hover:text-cyan-400">About</a></li>
          <li><a href="#skills" class="hover:underline hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" class="hover:underline hover:text-cyan-400">Projects</a></li>
        </ul>
      </div>

      <!-- Contact Section -->
      <div class="flex-1">
        <h3 class="lg:text-xl font-bold mb-2">Contact</h3>
        <div class="w-10 h-1 bg-cyan-500 mx-auto md:mx-0 mb-4"></div>
        <p class="hover:underline hover:text-cyan-400">web.aminurrahman@gmail.com</p>
        <p class="mt-2 hover:underline hover:text-cyan-400">+880 1234 567890</p>
        <p class="mt-2 hover:underline hover:text-cyan-400">Dhaka, Bangladesh</p>
      </div>

      <!-- Social Media Links Section -->
      <div class="flex-1 flex flex-col items-center md:items-start">
        <h3 class="lg:text-xl font-bold mb-2">Follow Me</h3>
        <div class="w-10 h-1 bg-cyan-500 mx-auto md:mx-0 mb-4"></div>
        <section class="flex lg:gap-4 xs:gap-6 xs:mt-2">
          <a
            href="https://github.com/arsuhan"
            target="_blank"
            class="shadow-cyan-400 duration-500 hover:shadow-sm hover:shadow-cyan-400 bg-gray-100 text-blue-600 hover:bg-cyan-400 p-3 rounded-full hover:text-white text-xl flex justify-center items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aminur-rahman-200366328/"
            target="_blank"
            class="shadow-cyan-400 duration-500 hover:shadow-sm hover:shadow-cyan-400 bg-gray-100 p-3 rounded-full text-blue-600 hover:bg-cyan-400 hover:text-white text-xl flex justify-center items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100082093456990"
            target="_blank"
            class="shadow-cyan-400 overflow-hidden transform transition-all duration-500 hover:shadow-sm hover:shadow-cyan-400 bg-gray-100 hover:bg-cyan-400 p-3 rounded-full text-blue-600 hover:text-white text-xl flex justify-center items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
        </section>
      </div>
    </div>
    <div class="w-full h-0.5 bg-gray-500 mt-8 rounded"></div>
    <p class="text-center text-gray-300 mt-4">❤Aminur Rahman - 2025</p>
  </footer>
</template>
