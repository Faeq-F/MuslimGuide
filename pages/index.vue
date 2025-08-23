<script setup lang="ts">
import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()
</script>

<template>
  <div>
    <h2
      class="text-[#0d141c] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Welcome,</h2>
    <p
      class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
      May Allah accept your Umrah. Here are some resources to help you on
      your journey.</p>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <div class="flex flex-col gap-3 pb-3" v-for="(cat, i) in duas.categories"
        :key="i">
        <div
          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg border-accented border"
          :style="'background-image: url(' + cat.image + ');'">
        </div>
        <p class=" text-[#0d141c] dark:text-white text-base font-medium
          leading-normal">
          {{ cat.label }} Duas</p>
      </div>
    </div>
  </div>
</template>


<style></style>