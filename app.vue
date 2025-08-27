<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
import { onMounted } from 'vue';
const lenisOptions = {
  anchors: true
}

onMounted(() => {
  document.addEventListener('DOMContentLoaded', function () {
    window.AddToHomeScreenInstance = window.AddToHomeScreen({
      appName: 'Muslim Guide',
      appNameDisplay: 'standalone',
      appIconUrl: '/favicon.png',
      assetUrl: 'https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@3.4/dist/assets/img/',
      maxModalDisplayCount: -1,
      displayOptions: { showMobile: true, showDesktop: true },
      allowClose: true,
      showArrow: true,
    })
  })
})
</script>
<template>
  <VueLenis root :options="lenisOptions" />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>