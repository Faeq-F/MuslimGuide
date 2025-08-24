<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()
import Hajj from '~/components/guides/hajj.vue';
import Umrah from '~/components/guides/umrah.vue';
import Madinah from '~/components/guides/madinah.vue';
import Masjid from '~/components/guides/masjid-al-nabawi.vue';
</script>
<template>
  <div>
    <Hajj v-if="route.path == '/guide/hajj'" />
    <Umrah v-else-if="route.path == '/guide/umrah'" />
    <Madinah v-else-if="route.path == '/guide/madinah'" />
    <Hajj v-else-if="route.path == '/guide/hajj'" />
    <Masjid v-else-if="route.path == '/guide/masjid-al-nabawi'" />
  </div>
</template>