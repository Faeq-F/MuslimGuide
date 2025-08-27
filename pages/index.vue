<script setup lang="ts">
import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()

import { useSettingsStore } from '~/stores/localStorage'
const settings = useSettingsStore()
</script>

<template>
  <div>
    <h2
      class="text-[#0d141c] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
      Welcome, {{ settings.settings.name }}</h2>
    <p
      class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
      May Allah accept your prayers. Here are some resources to help you.
    </p>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      <nuxt-link :to="cat.to" v-for="(cat, i) in duas.categories" :key="i">
        <div class=" flex flex-col gap-3 pb-3 ">
          <div
            class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg border-accented border"
            :style="'background-image: url(' + cat.image + ');'">
          </div>
          <p class=" text-[#0d141c] dark:text-white text-base font-medium
          leading-normal">
            {{ cat.label }} Duas</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<style></style>