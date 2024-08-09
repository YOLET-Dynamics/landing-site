<template>
  <header>
    <nav
      id="navbar"
      class="w-full border-b border-gray-700 py-10 lg:py-12 px-10 lg:px-20 grid grid-cols-6 gap-4 bg-mainBlack-500"
    >
      <div class="justify-self-start items-center col-span-4 lg:col-span-2">
        <NuxtLink to="/">
          <img
            src="~/assets/imgs/Logo-Dark-Alt.png"
            class="h-8 md:h-12 lg:h-14"
            alt="YOLET Logo"
          />
        </NuxtLink>
      </div>
      <div class="hidden lg:block justify-self-center self-center col-span-3 xl:col-span-2">
        <ul class="flex gap-8 text-lg text-white">
          <li class="cursor-pointer hidden md:block text-button-links">
            <a href="/about">Our Story</a>
          </li>
          <li class="text-gray-500">/</li>
          <li class="cursor-pointer text-button-links">
            <a href="/business">Businesses</a>
          </li>
          <li class="text-gray-500">/</li>
          <li class="cursor-pointer text-button-links">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div class="justify-self-end self-center col-span-2 lg:col-span-1 xl:col-span-2">
        <button class="nav-bar-cta hover:button-hover">Notify Me!</button>
      </div>
    </nav>
  </header>
</template>
