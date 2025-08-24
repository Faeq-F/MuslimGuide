<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()



// //temp
// const pages = [
//   {
//     title: 'About Me',
//     description: 'A brief introduction about myself',
//     icon: 'i-lucide-user',
//     category: 'About Me',
//     url: '/about'
//   },
//   {
//     title: 'Experience',
//     description: 'My professional journey and experiences',
//     icon: 'i-lucide-briefcase',
//     category: 'About Me',
//     url: '/experience'
//   },
//   {
//     title: 'Projects',
//     description: 'Showcasing my projects and contributions',
//     icon: 'i-lucide-folder',
//     category: 'About Me',
//     url: '/about'
//   },
//   {
//     title: 'Skills',
//     description: 'My technical skills and proficiencies',
//     icon: 'i-lucide-code',
//     category: 'About Me',
//     url: '/about'
//   },
//   {
//     title: 'Contact',
//     description: 'How to get in touch with me',
//     icon: 'i-lucide-mail',
//     category: 'About Me',
//     url: '/about'
//   },
//   {
//     title: 'Degree',
//     description: 'My academic qualifications',
//     icon: 'i-lucide-mail',
//     category: 'About Me',
//     url: '/about'
//   }
// ]

// import Fuse from 'fuse.js'
// const searchVal = ref('')
// const searchedPages = ref(pages)
// const fuse = new Fuse(pages, {
//   keys: ['description', 'title', 'category'],
// });

// watch(searchVal, (newSearch, _oldSearch) => {
//   if (newSearch === '') {
//     searchedPages.value = pages;
//   } else {
//     searchedPages.value = fuse.search(newSearch).map((result) => result.item);
//   }
// })

// onMounted(() => {
//   console.log()
// })

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