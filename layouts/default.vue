<script setup>
import Navbar from '~/components/layoutSections/navbar.vue';
import HeaderBar from '~/components/layoutSections/headerbar.vue';

const {
  autoSetTheme
} = useThemeHandler({
  watchChanges: true,
})

autoSetTheme()
</script>

<template>
  <HeaderBar />
  <div
    class="min-h-[82vh] max-h-[82vh] h-[82vh] flex size-full flex-col dark:bg-[#182634] bg-slate-50 justify-between group/design-root overflow-x-hidden overflow-y-scroll"
    data-lenis-prevent>
    <slot />
  </div>
  <Navbar />
</template>