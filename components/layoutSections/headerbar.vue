<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

import { useGuidesStore } from '~/stores/guides'
const guides = useGuidesStore()
</script>
<template>
  <div
    class="h-[7vh] min-h-[7vh] max-h-[7vh] flex items-center justify-between border-b border-[#e7edf4] dark:border-[#223649] bg-slate-50 dark:bg-[#182634]">
    <div class="px-4 flex"
      v-if="!(route.path == '/' || route.path == '/dua' || route.path == '/guide')"
      @click="$router.back()">
      <UIcon name="i-lucide-chevron-left" class="!size-5" />
    </div>
    <div v-else class="pl-12 flex"></div>
    <div class="flex">
      <h2
        class="text-[#0d141c] dark:text-white  text-lg font-bold text-center pt-0.5"
        v-if="route.path == '/settings'">
        Settings
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/guide'">
        Guides
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/guide/hajj'">
        Hajj Guide
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-balance font-bold text-center pt-0.5"
        v-else-if="route.path.includes('/guide/hajj/step')">
        {{ guides.hajj[route.path.match(/\d+$/)![0]].name }}
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/guide/umrah'">
        Umrah Guide
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-balance font-bold text-center pt-0.5"
        v-else-if="route.path.includes('/guide/umrah/step')">
        {{ guides.umrah[route.path.match(/\d+$/)![0]].name }}
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/guide/madinah'">
        Madinah Guide
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/guide/masjid-al-nabawi'">
        Masjid Al-Nabawi Guide
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/dua'">
        Duas
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path.includes('dua')">
        Dua
      </h2>
      <h2
        class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pt-0.5"
        v-else-if="route.path == '/search'">
        Search
      </h2>
      <h2
        class="text-[#0d141c] dark:text-white  text-lg font-bold text-center pt-0.5"
        v-else>
        Muslim Guide
      </h2>
    </div>
    <div class="px-4 flex" v-if="route.path != '/search'">
      <nuxt-link to="/search">
        <UIcon name="i-lucide-search" class="!size-5" />
      </nuxt-link>
    </div>
    <div v-else class="pl-12 flex"></div>
  </div>
</template>