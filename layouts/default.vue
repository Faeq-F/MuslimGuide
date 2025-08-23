<script setup>
import Navbar from '~/components/layoutSections/navbar.vue';
const route = useRoute()

const {
  autoSetTheme
} = useThemeHandler({
  watchChanges: true,
})

autoSetTheme()
</script>

<template>

  <div
    class="h-[7vh] min-h-[7vh] max-h-[7vh] flex items-center justify-center border-b border-[#e7edf4] dark:border-[#223649] bg-slate-50 dark:bg-[#182634]">
    <h2
      class="text-[#0d141c] dark:text-white  text-lg font-bold text-center pb-2 p-4"
      v-if="route.path == '/settings'">
      Settings
    </h2>
    <h2
      class="text-[#0d141c]  dark:text-white text-lg font-bold text-center pb-2 p-4"
      v-else-if="route.path.includes('guide')">
      Guide
    </h2>
    <h2
      class="text-[#0d141c] dark:text-white  text-lg font-bold text-center pb-2 p-4"
      v-else>
      Umrah Guide
    </h2>
  </div>
  <div
    class="min-h-[82vh] max-h-[82vh] h-[82vh] flex size-full flex-col dark:bg-[#182634] bg-slate-50 justify-between group/design-root overflow-x-hidden overflow-y-scroll">
    <transition name="slide" mode="out-in">
      <div :key="route.name" class="h-full w-full">
        <slot />
      </div>
    </transition>
  </div>
  <Navbar />
</template>

<style lang="scss">
@use 'sass:math';

//=-------------------------------------------------------------------
//== Page transitions ==//

// .slide-enter-active,
.slide-leave-active {
  transition:
    opacity 1s,
}

// .slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>