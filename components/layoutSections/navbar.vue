<script setup lang="ts">

import { useRoute } from 'vue-router';

const route = useRoute()

function activeP(page) {
  if (route.path == page) {
    return 'text-[#0d141c] dark:text-white'
  } else {
    return 'text-[#49739c] dark:text-[#90adcb]'
  }
}

function activeBG(page) {
  if (route.path == page) {
    return 'bg-accented'
  } else {
    return ''
  }
}

</script>

<template>
  <MazAnimatedElement direction="up" :duration="700" id="navbar">
    <div class="h-[10vh] min-h-[10vh] max-h-[10vh]">
      <div
        class="flex gap-2 border-t dark:border-[#223649] border-[#e7edf4] bg-slate-50 dark:bg-[#182634]  px-4 pb-3 pt-2">
        <nuxt-link
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full pb-1 pt-2"
          to="/" :class="activeBG('/')">
          <div class="flex items-center justify-center" :class="activeP('/')">
            <UIcon name="i-lucide-home" class="!size-5" />
          </div>
          <p class="text-xs font-medium leading-normal tracking-[0.015em]"
            :class="activeP('/')">
            Home</p>
        </nuxt-link>
        <nuxt-link
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full pb-1 pt-2"
          :class="activeBG('/guide')" to="/guide">
          <div class=" flex items-center justify-center"
            :class="activeP('/guide')">
            <UIcon name="i-lucide-book-open" class="!size-5" />
          </div>
          <p class=" text-xs font-medium leading-normal tracking-[0.015em]"
            :class="activeP('/guide')">
            Guides
          </p>
        </nuxt-link>
        <nuxt-link
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full pb-1 pt-2"
          :class="activeBG('/dua')" to="/dua">
          <div class=" flex items-center justify-center"
            :class="activeP('/dua')">
            <UIcon name="i-mingcute-pray-line" class="!size-5" />
          </div>
          <p class=" text-xs font-medium leading-normal tracking-[0.015em]"
            :class="activeP('/dua')">
            Duas
          </p>
        </nuxt-link>
        <nuxt-link
          class="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full pb-1 pt-2"
          :class="activeBG('/settings')" to="/settings">
          <div class=" flex items-center justify-center"
            :class="activeP('/settings')">
            <UIcon name="i-lucide-settings" class="!size-5" />
          </div>
          <p class="text-xs font-medium leading-normal tracking-[0.015em]"
            :class="activeP('/settings')">
            Settings</p>
        </nuxt-link>
      </div>
    </div>
  </MazAnimatedElement>
</template>