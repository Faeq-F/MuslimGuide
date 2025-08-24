<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()
const category = duas.categories.find((c) => route.path === c.to)

let dua;
if (!category) {
  const name = (route.params.name as string).replaceAll('~', ' ')
  const duaCat = duas.duaList.find((d) => d.name == name)
  dua = duaCat.duas[route.query.n as unknown as number - 1]
}

</script>

<template>
  <div>
    <div v-if="category">
      {{ category }}
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
            class="mt-2 text-[#0d141c] dark:text-white text-2xl font-normal leading-normal pt-1 px-4 text-center">
            {{ dua.arabic }}
          </p>
          <p class="pb-2 pt-1 text-xs text-center text-slate-400 font-light">
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