<template>
<div>
  <footer class="hidden lg:block px-8 lg:px-[7.25rem]">
    <div class="bg-[#F9FFF7] px-16 grid grid-cols-4 gap-x-28 pt-[4.625rem] pb-10">
      <div>
        <nuxt-link to="/">
          <img src="@/static/images/logos/elemes.png" alt="logo" class="lg:h-auto h-9" />
        </nuxt-link>
        <p>Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>
        <div class="flex gap-x-2">
          <a href="" class="p-[0.625rem] rounded-full bg-white hover:bg-primary text-primary hover:text-white block">
            <i class="iconify text-xl" data-icon="feather:mail"></i>
          </a>
          <a href="" class="p-[0.625rem] rounded-full bg-white hover:bg-primary text-primary hover:text-white block">
            <i class="iconify text-xl" data-icon="carbon:phone"></i>
          </a>
          <a href="" class="p-[0.625rem] rounded-full bg-white hover:bg-primary text-primary hover:text-white block">
            <i class="iconify text-xl" data-icon="ant-design:instagram-outlined"></i>
          </a>
        </div>
      </div>
      <ContentFooterLink title="categories" :links="menu" />
      <ContentFooterLink title="about us" :links="about" />
      <div>
        <h6 class="text-lg font-medium text-dark">Newsletter</h6>
        <div class="text-sm my-8 flex flex-col gap-y-[1.125rem]">
          <p class="text-gray-light1">Get now free 50% discount for alll products on your first order</p>
          <div class="flex">
            <input v-model="email" type="email" placeholder="Your email address" class="px-2 py-1 rounded-l-lg bg-transparent border border-black placeholder-black" />
            <button class="px-4 py-2 rounded-r-lg bg-primary text-white">SEND</button>
          </div>
          <div>
            <div class="flex items-center gap-x-0.5">
              <span class="iconify text-primary" data-icon="feather:mail"></span> <a href="#">elemesid@gmail.com</a>
            </div>
            <div class="flex items-center gap-x-0.5">
              <span class="iconify text-primary" data-icon="carbon:phone"></span> <a href="#">0888 1111 2222</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center pt-12 pb-8 text-xs text-gray-light1">&copy; {{new Date().getFullYear()}} Elemes id. All rights reserved</p>
  </footer>
  <footer class="lg:hidden fixed bottom-0 border border-t border-[#F8F8F8] w-full bg-white py-3 px-9 z-50 flex justify-between">
    <nuxt-link to="/" class="text-center">
      <div class="w-10 mx-auto flex flex-col gap-y-2">
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
      </div>
      Home
    </nuxt-link>
    <nuxt-link to="/" class="text-center">
      <div class="w-10 mx-auto flex flex-col gap-y-2">
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
      </div>
      Promotions
    </nuxt-link>
    <nuxt-link to="/" class="text-center">
      <div class="w-10 mx-auto flex flex-col gap-y-2">
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
        <div class="border-2 border-[#757575] rounded-full"></div>
      </div>
      Others
    </nuxt-link>
  </footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      menu: [
        {
          text: 'Cupcake',
          link: '/'
        },
        {
          text: 'Pizza',
          link: '/'
        },
        {
          text: 'Kebab',
          link: '/'
        },
        {
          text: 'Salmon',
          link: '/'
        },
        {
          text: 'Doughnut',
          link: '/'
        }
      ],
      about: [
        {
          text: 'About Us',
          link: '/'
        },
        {
          text: 'FAQ',
          link: '/'
        },
        {
          text: 'Report Problem',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style>

</style>