<template>
  <!-- change the background color and text color to change theme -->
  <div class="DefaultLayout min-h-max bg-[#0e0e0e]">
    <!-- navbar here -->
    <Navbar class="mb-4 backdrop-filter backdrop-blur-[6px] backdrop-saturate-150" />
    <div class="container text-zinc-400 mx-auto px-1">
      <slot />
    </div>
  </div>
</template>