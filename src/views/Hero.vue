<template>
  <section
    id="home"
    class="md:py-2 dark:bg-[#1f242d] bg-gray-100 md:min-h-[600px] lg:min-h-[560px] overflow-x-hidden"
  >
    <section
      class="lg:mt-40 flex items-center justify-center md:px-4 xs:px-4 relative"
    >
      <div
        class="items-center xs:mx-4 md:mx-10 lg:mx-20 flex flex-wrap lg:flex-nowrap"
      >
        <!-- Left Content -->
        <div
          class="md:mt-20 lg:-mt-10 xs:mt-24 md:mx-auto"
        >
          <p
            class="text-lg md:text-1xl lg:text-2xl font-bold text-white -mt-4 md:mt-0 text-center lg:text-left"
          >
            Hello, This's Me
          </p>

          <h1
            class="xs:text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white mt-2 underline underline-offset-4 decoration-4 lg:text-left" 
          >
            Md. Aminur Rahman
          </h1>

          <h2
            class="text-lg md:text-xl lg:text-2xl justify-center font-semibold lg:mt-6 xs:mt-3 text-white flex lg:justify-start gap-2 md:mt-5"
          >
            I am a Frontend Developer
          </h2>

          <p class="text-white mb-6 lg:mb-3 lg:px-5 xs:mt-3 xs:text-sm lg:text-base md:text-[16px] xs:-mx-5 md:mt-6 md:text-center lg:text-start">
            With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like Vue.js,
            I enjoy building intuitive, accessible, and high-performing digital products that solve real-world problems.
        </p>

          <!-- Social Links -->
          <div
            class="flex items-center gap-4 mb-6 justify-center lg:justify-start mt-5"
          >

            <!-- GitHub -->
            <a
              href="https://github.com/iamsohan100"
              target="_blank"
              class="text-cyan-400 border-cyan-400 hover:shadow-cyan-400 hover:text-cyan-400 border duration-500 hover:-translate-y-1.5 lg:p-2 md:p-2 p-2 rounded-full transition hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.04c-5.52 0-10 4.48-10 
                     10 0 4.42 2.87 8.16 6.84 
                     9.5.5.09.66-.22.66-.48 
                     0-.24-.01-.88-.01-1.72
                     -2.78.6-3.37-1.34-3.37-1.34
                     -.45-1.15-1.11-1.46-1.11-1.46
                     -.9-.61.07-.6.07-.6 
                     1 .07 1.52 1.04 1.52 1.04
                     .89 1.52 2.34 1.08 2.91.83
                     .09-.65.35-1.08.63-1.33
                     -2.22-.26-4.56-1.1-4.56-4.91
                     0-1.08.39-1.96 1.03-2.65
                     -.1-.26-.45-1.31.1-2.74 
                     0 0 .84-.27 2.75 1.03a9.5 
                     9.5 0 015 0c1.91-1.3 
                     2.75-1.03 2.75-1.03.55 
                     1.43.2 2.48.1 2.74.64.69 
                     1.03 1.57 1.03 2.65 0 
                     3.82-2.34 4.65-4.57 
                     4.9.36.31.68.93.68 
                     1.88 0 1.36-.01 2.46-.01 
                     2.79 0 .27.17.58.68.48A10 
                     10 0 0022 12.04c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>

            <!-- linke din -->

            <a href="https://www.linkedin.com/in/iamsohan100/" 
            target="_blank" class="text-cyan-400 border-cyan-400 hover:shadow-cyan-400 hover:text-cyan-400 border duration-500 hover:-translate-y-1.5 p-2.5 rounded-full  transition hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <svg class="lg:w-4 lg:h-4 xs:w-4 xs:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24H22.2c.98 0 1.8-.77 1.8-1.72V1.72C24 .77 23.2 0 22.23 0zM7.1 20.44H3.56V9H7.1v11.44zM5.34 7.52c-1.14 0-2.06-.91-2.06-2.03s.92-2.03 2.06-2.03 2.06.91 2.06 2.03-.92 2.03-2.06 2.03zM20.45 20.44h-3.53v-5.65c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.18 1.47-2.18 2.99v5.74H9.33V9h3.39v1.56h.05c.47-.9 1.61-1.86 3.32-1.86 3.56 0 4.22 2.34 4.22 5.37v6.37z"/>
              </svg>
            </a>

            <!-- facebook -->
             <a href="https://www.facebook.com/profile.php?id=100082093456990" 
            target="_blank" class="text-cyan-400 border-cyan-400 hover:shadow-cyan-400 hover:text-cyan-400 border duration-500 hover:-translate-y-1.5 p-2.5 rounded-full  transition hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <svg class="lg:w-4 lg:h-4 xs:w-4 xs:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24H22.2c.98 0 1.8-.77 1.8-1.72V1.72C24 .77 23.2 0 22.23 0zM7.1 20.44H3.56V9H7.1v11.44zM5.34 7.52c-1.14 0-2.06-.91-2.06-2.03s.92-2.03 2.06-2.03 2.06.91 2.06 2.03-.92 2.03-2.06 2.03zM20.45 20.44h-3.53v-5.65c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.18 1.47-2.18 2.99v5.74H9.33V9h3.39v1.56h.05c.47-.9 1.61-1.86 3.32-1.86 3.56 0 4.22 2.34 4.22 5.37v6.37z"/>
              </svg>
            </a>

          </div>

          <!-- CV Button -->
          <div class="flex justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1Qwo1AQjX3kGLzp5QMU45ZH-_0f2p6zF7/view?usp=sharing "
              target="_blank"
            >
              <button
                class="w-48 md:w-52 lg:w-42 px-4 lg:px-8 py-2 md:py-3 text-black hover:shadow-cyan-400 bg-[#00f0ff] rounded-full font-medium duration-500 transition hover:shadow-[0_0_15px_rgba(0,0,0,0.4)]hover:shadow-cyan-400"
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <!-- Right Image -->

        <div class="hidden lg:flex justify-center lg:justify-end w-full duration-500 transition hover:scale-[1.03] h-[320px] -mt-6">
      <div
         class="overflow-hidden rounded-full relative z-10 w-full max-w-[320px] bg-cyan-400 ring-2 dark:ring-cyan-400 ring-cyan-400 shadow-[0_0_25px_rgba(0,0,0,0.4)] shadow-cyan-400"
        >
        <img src="/public/images/sohan.jpg" alt="Img" class="w-full object-cover rounded-full"  
        />
      </div>
        </div>
      </div>
    </section>
  </section>
</template>