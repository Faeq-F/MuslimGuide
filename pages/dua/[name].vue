<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()
const category = duas.categories.find((c) => route.path === c.to)

let dua;
let filteredDuas;
if (!category) {
  const name = (route.params.name as string).replaceAll('~', ' ')
  const duaCat = duas.duaList.find((d) => d.name == name)
  dua = duaCat.duas[route.query.n as unknown as number - 1]
} else {
  filteredDuas = duas.duaList.filter((c) => {
    if (c.categories) return c.categories.includes(category.label)
    else return false;
  });
}

</script>

<template>
  <div>
    <div v-if="category">
      <div>
        <div v-for="(section, i) in filteredDuas" :key="i" class="ml-4">
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
    </div>
    <div v-else class="mt-4">
      <!-- dua -->
      <div
        class="relative flex size-full min-h-screen flex-col bg-slate-50 dark:bg-[#182634] justify-between group/design-root overflow-x-hidden">
        <div>
          <h1
            class="text-[#0d141c] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-3 pt-5 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4">
            {{ dua.title }}
          </h1>
          <p
            class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center pb-1">
            {{ dua.arabic }}
          </p>
          <p class="pb-2  text-xs text-center text-slate-400 font-light"
            v-if="dua.reference != ''">
            Reference: {{ dua.reference }}
          </p>
          <div class="flex px-4 justify-center">
            <button
              class=" overflow-hidden rounded-lg py-1  bg-[#0d80f2] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] px-4">
              <div
                class="text-slate-50 flex clickable items-center justify-center">
                <UIcon name="i-lucide-play" class="!size-5" />
                <span class="truncate pl-2">Play</span>
              </div>
            </button>
          </div>
          <p
            class="mt-8 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
            transliteration
          </p>
          <p
            class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            {{ dua.transliteration }}
          </p>
          <p
            class="mt-8 mb-2 text-sm text-center text-slate-400 font-light outline outline-[#e7edf4] dark:outline-[#223649]">
            translation
          </p>
          <p
            class="text-[#0d141c] dark:text-white text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            {{ dua.translation }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>