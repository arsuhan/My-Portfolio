<script setup>
import { reactive, ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = '341f3d57-781b-4e75-95f4-25a5f8c2c5f1'
const name = ref('')
const email = ref('')
const message = ref('')
const showSuccess = ref(false) 

const submitForm = async () => {
  console.log('submit')
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })

  const result = await response.json()
  if (result.success) {
    console.log(result)
    showSuccess.value = true // ✅ Alert show
    setTimeout(() => {
      showSuccess.value = false 
    }, 3000)
  }

  // ইনপুট ফিল্ড খালি করা
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
    <section id="contact" class="bg-[#1f242d]">
    <section class="py-8 -my-1 shadow-lg dark:text-white">
      <section class="text-center">
        <h1 class="lg:text-4xl xs:text-xl font-serif font-bold xs:-mt-6 lg:mt-1">
          <span class="text-white">Get In </span>
          <span class="text-cyan-400">Touch</span>
        </h1>
        <p class="mt-2 lg:text-[20px] text-white">Let's work together</p>
        <div class="w-20 lg:h-1 xs:h-0.5 bg-cyan-500 mx-auto mt-3 rounded"></div>
      </section>

   
      <section data-aos="fade-up"
      data-aos-duration="1000"
     data-aos-anchor-placement="center-bottom"

        class="p-10 md:px-16 lg:mt-8 xs:py-10"
      >
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-20 lg:gap-24 xs:gap-6">

          
      <div class=" xs:-mx-8 lg:h-[550px] lg:mt-6">

<div class="space-x-2 mt-2 md:mt-16">

  <h2 class="lg:text-3xl xs:text-xl xs:mx-2 lg:items-start lg:justify-start font-bold mb-4 lg:mx-6 text-white xs:-mt-6 md:justify-start">Contact Information</h2>
  <p class="lg:text-[18px] xs:text-[14px] text-white mb-6 xs:-mt-1 lg:-mt-4 lg:p-6">
    I’m always open to job opportunities, collaborations, or conversations. If you have an idea or just want to say hello, feel free to reach out!
  </p>
  <div class="lg:space-y-10 xs:space-y-6">

    <div class="flex items-start -mt-2 lg:mx-6 lg:-mt-4">
      <div class="bg-blue-100 p-3 lg:rounded-sm xs:rounded-xl text-cyan-600 mt-4">
        <svg
          class="lg:w-5 lg:h-5 xs:w-4 xs:h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16v16H4z" fill="none" />
          <path d="M20 4H4v16h16V4zM5.5 6.5l6.5 4.5 6.5-4.5V18H5.5V6.5z" />
        </svg>
      </div>
      <div class="xs:-mt- lg:mx-2">
        <h4 class="font-bold mt-3 mx-2 text-cyan-400">Email</h4>
        <p class="text-white mx-2">aminurrahmansuhan@gmail.com</p>
      </div>
    </div>


    <div class="flex items-start lg:mx-6">
      <div class="bg-blue-100 p-3 lg:rounded-sm xs:rounded-xl text-cyan-600">
        <svg
          class="lg:w-5 lg:h-5 xs:w-4 xs:h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.69.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.69 1 1 0 01-.27 1.11l-2.2 2.2z"
          />
        </svg>
      </div>
      <div class="xs:-mt-1 lg:mx-2">
        <h4 class="font-bold mx-2 text-cyan-400">Phone</h4>
        <p class="text-white mx-2">+880 1701635619</p>
      </div>
    </div>


    <div class="flex items-start lg:mx-6">
      <div class="bg-blue-100 p-3 lg:rounded-sm xs:rounded-xl text-cyan-600">
        <svg
          class="lg:w-5 lg:h-5 xs:w-4 xs:h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z"
          />
        </svg>
      </div>
      <div class="xs:-mt-1 lg:mx-2">
        <h4 class="font-bold mx-2 text-cyan-400">Location</h4>
        <p class="text-white mx-2">Dhaka, Bangladesh</p>
      </div>
    </div>
  </div>
</div>

<div class="flex space-x-4 xs:mt-10 lg:mt-19 xs:mx-3 lg:mx-8 ">
  <a
    href="https://github.com/arsuhan" target="_blank"
    class=" shadow-[0_0_2px_rgba(0,0,0,0.4)] shadow-blue-700 dark:shadow-cyan-400 duration-500 hover:-translate-y-1.5 hover:shadow-sm hover:shadow-blue-700 dark:hover:shadow-cyan-400 bg-gray-100 text-cyan-600 hover:bg-blue-700 dark:hover:bg-cyan-400 p-3 rounded-full hover:text-white text-xl flex justify-center items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8 xs:rounded-xl"
  >
    <i class="fab fa-github"></i>
  </a>
  <a
    href="https://www.linkedin.com/in/aminur-rahman-200366328" target="_blank"
    class="shadow-[0_0_2px_rgba(0,0,0,0.4)] shadow-blue-700 dark:shadow-cyan-400 duration-500 hover:-translate-y-1.5 hover:shadow-sm hover:shadow-cyan-400 bg-gray-100 p-3 rounded-full text-cyan-600 hover:bg-blue-700 dark:hover:bg-cyan-400 hover:text-white text-xl flex justify-center xs:rounded-xl items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8"
  >
    <i class="fab fa-linkedin-in"></i>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=100082093456990" target="_blank"
    class="shadow-[0_0_2px_rgba(0,0,0,0.4)] shadow-blue-700 dark:shadow-cyan-400 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-sm hover:shadow-cyan-400 bg-gray-100 hover:bg-blue-700 dark:hover:bg-cyan-400 p-3 rounded-full text-cyan-600 hover:text-white text-xl flex justify-center items-center lg:h-10 lg:w-10 xs:h-8 xs:w-8 xs:rounded-xl"
  >
    <i class="fab fa-facebook-f"></i>
  </a>
</div>
      </div> 

         
        <div class="">
          <form
            @submit.prevent="submitForm"
            class="bg-gray-700 rounded-lg xs:-mx-6 shadow-md xs:p-7 lg:p-6 lg:space-y-8 xs:space-y-5 md:space-y-4 xs:mt-5"
          >
            <section class="xs:-mx-4 lg:mx-0 ">
                <div class="flex items-center justify-center">
                    <h1 class="lg:text-4xl xs:text-2xl font-bold md:-mt-2 lg:mt-3">
                        <span class="text-white">Contact </span>
                        <span class="text-cyan-500">Me!</span>
                    </h1>
                </div>
              <label for="Name" class="block font-medium text-white mt-6"
                >Name</label
              >
              <input
                type="text"
                id="name"
                placeholder="Your ame"
                v-model="name"
                required
                class="mt- bg-[#1f242d] block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-white focus:border-blue-500 border-gray-600 text-white"
              />
            </section>

            <section class="xs:-mx-4 lg:mx-0">
              <label for="Email" class="block font-medium text-white "
                >Email</label
              >
              <input
                type="text"
                id="email"
                placeholder="Your Email"
                v-model="email"
                required
                class="mt- bg-[#1f242d] block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-white focus:border-blue-500 border-gray-600 text-white"
              />
            </section>
            <section class="xs:-mx-4 lg:mx-0">
              <label
                for="Message"
                class="block font-medium text-white"
                >Message</label
              >
              <textarea
                id="message"
                v-model="message"
                placeholder="Your Message"
                required
                class="mt- bg-[#1f242d] block w-full px-3 py-2 border-2 rounded-md shadow-sm focus:ring-white focus:border-blue-500 border-gray-600 text-white"
                rows="4"
              >
              </textarea>
            </section>

            <div class="flex items-center justify-center">
                <button
              type="submit"
              class="xs:flex xs:items-center xs:justify-center lg:items-start lg:justify-start lg:block xs:w-40 lg:w-56 md:px-4 shadow-white lg:px-8 xs:py-2 md:py-3 text-white bg-[#00f0ff] hover:shadow-[0_0_8px_rgba(0,0,0,0.4)] rounded-full font-medium transition duration-500 hover:shadow-cyan-400 xs:text-sm lg:text-lg lg:-mt-4"
            >
              Send Message
            </button>

            </div>
      </form>
        </div>
        </div>
      </section>
    </section>
</section>
</template>