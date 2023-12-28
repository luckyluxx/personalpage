<script setup>
// use example of plugins
const {$sayName} = useNuxtApp()
  $sayName('loki')
// use example of composables
  const { whoAmI} = useText();
  const { sayHello, dateNow } = useUtils();
  sayHello()
</script>

<template>

  <div class="grid grid-rows-3 grid-flow-col min-h-max divide-y-2 divide_customs">
    <div class="grid grid-cols-subgrid col-span-5 divide-x-2 divide_customs">
      <div class=" ">
        
      </div>
      <div class="col-span-3">
        
      </div>
      <div class="p-1 flex justify-start items-center">
        <div class="flex flex-col justify-end h-full font-sans_Customs font-medium text-xs text-zinc-600 select-none lowercase">
          <span>12px</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-subgrid col-span-5 divide-x-2 divide_customs">
      <div class="p-1 flex justify-end items-center">
        <div class="flex flex-col justify-end h-full font-sans_Customs font-medium text-xs text-zinc-600 select-none lowercase">
          <div class="w-9 h-9 border-t-2 border-l-2 border_as_divide flex flex-row-reverse items-end rounded-tl-full">
            <span >90°</span>
          </div>
        </div>
      </div>
      <div class="p-4 col-span-3">
        <div class="flex flex-col h-full justify-center items-center font-sans_Customs font-bold">  
          <h2 class="text-3xl text-zinc-200 uppercase">
            Hi I Am Lucky 
          </h2>
          <span class="font-serif_Customs font-medium uppercase">
            Lucky Ardiansyah
          </span>
        </div>
        
      </div>
      <div class="p-4 flex justify-center items-center">
        
      </div>
    </div>
    <div class="grid grid-cols-subgrid col-span-5 divide-x-2 divide_customs">
      <div class="">
        
      </div>
      <div class="p-1 flex flex-col col-span-3">
        <div>
          <span v-html="whoAmI" class=""></span>
        </div>
      </div>
      <div class="">
        
      </div>
    </div>
    
  </div>

</template>