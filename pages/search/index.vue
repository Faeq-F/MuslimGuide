<script setup lang="ts">
import Fuse from 'fuse.js'
import { ref, watch } from 'vue';

import { useDuasStore } from '~/stores/duas'
const duas = useDuasStore()

const categoryPages = duas.categories.map((cat) => {
  return {
    title: cat.label + ' Duas',
    description: 'Duas for ' + cat.label,
    icon: cat.icon,
    category: 'Dua category',
    url: cat.to
  }
})

const duaPages = duas.duaList.map((s) => {
  return s.duas.map((d, j) => {
    return {
      title: d.title,
      description:
        d.title.replace(
          (' ' + d.title.split(' ').reverse().slice(0, 2).reverse()
            .join(' ')), ''),
      icon: 'i-mingcute-pray-line',
      category: 'Dua',
      url: '/dua/' + d.title.replace(
        (' ' + d.title.split(' ').reverse().slice(0, 2).reverse()
          .join(' ')), '').replaceAll(' ', '~') + '?n=' + (j + 1)
    }
  })
}).flat(1)

import { useGuidesStore } from '~/stores/guides'
const guides = useGuidesStore()

const hajjSteps = guides.hajj.map((s, i) => {
  return {
    title: s.name,
    description: 'Step ' + i + ' of Hajj',
    icon: 'i-streamline-islam',
    category: 'Hajj Step',
    url: '/guide/hajj/step' + i
  }
})

const umrahSteps = guides.umrah.map((s, i) => {
  return {
    title: s.name,
    description: 'Step ' + i + ' of Umrah',
    icon: 'i-hugeicons-kaaba-02',
    category: 'Umrah Step',
    url: '/guide/umrah/step' + i
  }
})

const pages = [
  {
    title: 'Home',
    description: 'Home page including Dua categories',
    icon: 'i-lucide-home',
    category: 'Home',
    url: '/'
  },
  {
    title: 'Guides',
    description: 'Lists all guides',
    icon: 'i-lucide-book-open',
    category: 'Guides',
    url: '/guide'
  },
  {
    title: 'Duas',
    description: 'Lists all duas',
    icon: 'i-mingcute-pray-line',
    category: 'Dua',
    url: '/dua'
  },
  {
    title: 'Settings',
    description: 'App Configuration',
    icon: 'i-lucide-settings',
    category: 'Settings',
    url: '/settings'
  },
].concat(categoryPages).concat([
  {
    title: 'Hajj Guide',
    description: 'Guide to Fulfilling the pillar of Islam',
    icon: 'i-streamline-islam',
    category: 'Guide',
    url: '/guide/hajj'
  },
  {
    title: 'Umrah Guide',
    description: 'Guide to Performing the minor pilgrimage',
    icon: 'i-hugeicons-kaaba-02',
    category: 'Guide',
    url: '/guide/umrah'
  },
  {
    title: 'Madinah Guide',
    description: 'Guide to Visiting the city of the Prophet',
    icon: 'i-hugeicons-mosque-02',
    category: 'Guide',
    url: '/guide/madinah'
  },
  {
    title: 'Masjid Al-Nabawi Guide',
    description: 'Visit the Masjid & the Prophet\'s grave',
    icon: 'i-hugeicons-mosque-02',
    category: 'Guide',
    url: '/guide/masjid-al-nabawi'
  },
]).concat(hajjSteps).concat(umrahSteps).concat(duaPages)

const searchVal = ref('')
const searchedPages = ref(pages)
const fuse = new Fuse(pages, {
  keys: ['description', 'title', 'category'],
});

watch(searchVal, (newSearch, _oldSearch) => {
  if (newSearch === '') {
    searchedPages.value = pages;
  } else {
    searchedPages.value = fuse.search(newSearch).map((result) => result.item);
  }
})

</script>

<template>

  <div>
    <UInput icon="i-lucide-search" size="md" variant="outline" color="neutral"
      placeholder="Search Pages..." class="w-full p-1" v-model="searchVal" />
    <USeparator class="w-[90vw] mx-auto my-0" />
    <ul class="overflow-y-scroll h-full pt-2 mr-0.5" data-lenis-prevent>
      <li v-for="(page, i) in searchedPages" :key="i"
        class="w-full p-2 pt-0 pr-1">
        <nuxt-link :to="page.url">
          <UButton :icon="page.icon" size="md" color="neutral" variant="soft"
            class="w-full">
            <USeparator orientation="vertical"
              class="h-6 invert opacity-20 ml-1" />
            <div class="w-full">
              <div
                class="w-full text-left pl-1.5 flex items-center justify-between">
                <span>
                  {{ page.title }}
                </span>
                <UBadge size="sm" color="neutral" variant="outline"
                  class="text-muted flex items-center opacity-80">
                  {{ page.category }}
                </UBadge>
              </div>
              <div class="text-muted pl-1.5 w-full text-left">
                {{ page.description }}
              </div>
            </div>
          </UButton>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>


<style></style>