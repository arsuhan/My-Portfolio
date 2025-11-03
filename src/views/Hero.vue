<script setup></script>

<template>
  <section
    id="home"
    class="md:py-2 bg-[#1f242d] md:min-h-[600px] lg:min-h-[560px] overflow-x-hidden"
  >
    <section class="lg:mt-40 flex items-center justify-center md:px-4 xs:px-4 relative">
      <!-- <div class="items-center xs:mx-4 md:mx-10 lg:mx-24 flex flex-wrap lg:flex-nowrap"> -->
      <div class="items-center xs:mx-4 md:mx-10 lg:mx-20 flex flex-col-reverse lg:flex-row">
        <!-- Left Content -->
        <div class="md:mt-20 lg:-mt-10 xs:mt-24 md:mx-auto">
          <p
            class="text-2xl md:text-1xl lg:text-2xl font-medium text-white -mt-4 md:mt-0 xs:-mx-5 lg:text-left uppercase lg:justify-start md:justify-center md:items-center md:flex"
          >
            Hello, This's Me
          </p>

          <h1
            class="xs:text-3xl md:text-3xl lg:text-4xl font-medium text-cyan-400 uppercase mt-2 underline underline-offset-2 decoration-4 lg:text-left xs:-mx-5 lg:justify-start md:justify-center md:items-center md:flex"
          >
            Md. Aminur Rahman
          </h1>

          <h2
            class="text-xl md:text-xl lg:text-2xl xs:-mx-5 font-semibold xs:mt-3 text-white flex lg:justify-start gap-2 md:mt-5 md:justify-center md:items-center md:flex"
          >
            I am a <span class="text-cyan-400"> Frontend Developer</span>
          </h2>

          <p
            class="text-white mb-6 lg:mt-4 lg:mb-3 lg:px-5 xs:mt-3 xs:text-[16.5px] lg:text-base md:text-[16px] xs:-mx-5 md:mt-6 md:text-center lg:text-start lg:-mx-9"
          >
            With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like Vue.js, I
            enjoy building intuitive, accessible, and high-performing digital products that solve
            real-world problems.
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-4 mb-6 justify-center lg:justify-start mt-5 lg:-mx-4">
            <!-- GitHub -->

            <a
              href="https://github.com/arsuhan"
              target="_blank"
              class="text-cyan-400 border-cyan-400 hover:shadow-cyan-400 hover:text-cyan-400 border duration-500 hover:-translate-y-1.5 xs:p-2 lg:p-1.5 rounded-lg transition hover:shadow-[0_0_8px_rgba(0,0,0,0.4)]"
            >
              <svg class="lg:w-5 lg:h-5 xs:w-4 xs:h-4" fill="currentColor" viewBox="0 0 24 24">
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

            <a
              href="https://www.linkedin.com/in/aminur-rahman-200366328/"
              target="_blank"
              class="text-cyan-400 border-cyan-400 hover:shadow-cyan-400 hover:text-cyan-400 border duration-500 hover:-translate-y-1.5 p-2 rounded-lg transition hover:shadow-[0_0_8px_rgba(0,0,0,0.4)]"
            >
              <svg class="lg:w-4 lg:h-4 xs:w-4 xs:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24H22.2c.98 0 1.8-.77 1.8-1.72V1.72C24 .77 23.2 0 22.23 0zM7.1 20.44H3.56V9H7.1v11.44zM5.34 7.52c-1.14 0-2.06-.91-2.06-2.03s.92-2.03 2.06-2.03 2.06.91 2.06 2.03-.92 2.03-2.06 2.03zM20.45 20.44h-3.53v-5.65c0-1.35-.03-3.08-1.88-3.08-1.89 0-2.18 1.47-2.18 2.99v5.74H9.33V9h3.39v1.56h.05c.47-.9 1.61-1.86 3.32-1.86 3.56 0 4.22 2.34 4.22 5.37v6.37z"
                />
              </svg>
            </a>
          </div>

          <!-- CV Button -->
          <div class="flex justify-center lg:justify-start lg:-mx-4">
            <div class="flex gap-3">
              <a
                href="https://drive.google.com/file/d/1pZUD8rx7Dedg_3Xcw1FY4L6HBZ3peZJv/view"
                target="_blank"
              >
                <div>
                  <button
                    type="button"
                    class="text-black bg-cyan-400 hover:bg-[#1f242d] border border-cyan-400 shadow-cyan-800 hover:text-white hover:shadow-cyan-400 shadow-[0_0_6px_rgba(0,0,0,0.4)] font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center gap-1.5"
                  >
                    Download CV
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Image -->

        <div
          class="hidden lg:flex justify-center lg:justify-end w-full duration-500 transition hover:scale-[1.03] h-[340px] -mt-6"
        >
          <div
            class="overflow-hidden rounded-[18%_0_18%_0] relative z-10 w-ful w-[320px] bg-cyan-400 ring-2 dark:ring-cyan-400 ring-cyan-400 shadow-[0_0_25px_rgba(0,0,0,0.4)] shadow-cyan-400"
          >
            <img src="/public/images/suhan1.png" alt="Img" class="w-full object-contain" />
          </div>
          <!-- <div
            class="overflow-hidden rounded-t-lg relative z-10 w-full max-w-[320px] bg-cyan-400 ring-2 dark:ring-cyan-400 ring-cyan-400 shadow-[0_0_25px_rgba(0,0,0,0.4)] shadow-cyan-400"
          >
            <img src="/public/images/suhan1.png" alt="Img" class="w-full rounded-" />
          </div> -->
        </div>
      </div>
    </section>
  </section>
</template>
