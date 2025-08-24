<script setup lang="ts">
import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()
</script>
<template>
  <div>
    <div v-for="(section, i) in duas.duaList" :key="i" class="ml-4">
      <p
        class="font-bold text-lg mb-2 mt-4 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
        {{ section.name }}
      </p>
      <nuxt-link :to="'/dua/' + dua.title.replace(
        (' ' + dua.title.split(' ').reverse().slice(0, 2).reverse()
          .join(' ')), '').replaceAll(' ', '~') + '?n=' + (j + 1)"
        v-for="(dua, j) in section.duas" :key="j">
        <div
          class="flex items-center gap-4 bg-slate-50 dark:bg-[#182634] px-2 min-h-[72px] py-1 border border-[#e7edf4] dark:border-[#223649]  rounded-2xl m-4">
          <div
            class="text-[#0d141c] dark:text-white flex items-center justify-center rounded-lg bg-[#e7edf4] dark:bg-accented shrink-0 size-14">
            {{ j + 1 }}
          </div>
          <div class="flex flex-col justify-center">
            <p
              class="text-[#0d141c] dark:text-white text-base font-medium leading-normal">
              {{ dua.title.replace(
                (' ' + dua.title.split(' ').reverse().slice(0, 2).reverse()
                  .join(' ')), '')
              }}
            </p>
            <p
              class="text-[#49739c] dark:text-[#90adcb] text-sm font-normal leading-normal ">
              {{ dua.reference }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>

  </div>
</template>