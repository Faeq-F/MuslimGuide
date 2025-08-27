<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useThemeHandler } from 'maz-ui'

import { useSettingsStore } from '~/stores/localStorage'
const settings = useSettingsStore()

const {
  setDarkTheme,
  setLightTheme,
  setSystemTheme,
} = useThemeHandler()

function toggleTheme(theme) {
  if (theme == 1) {
    setLightTheme()
  } else if (theme == 0) {
    setDarkTheme()
  } else {
    setSystemTheme()
  }
}

import type { TabsItem } from '@nuxt/ui'
const themeItems: TabsItem[] = [
  {
    label: 'Light',
    icon: 'i-lucide-sun',
    onSelect: () => toggleTheme(1),
  },
  {
    label: 'Dark',
    icon: 'i-lucide-moon',
    onSelect: () => toggleTheme(0),
  },
  {
    label: 'System',
    icon: 'i-lucide-laptop-minimal',
    onSelect: () => toggleTheme(-1),
  },
]

const activeTheme = ref(2)
watch(activeTheme, (newTheme) => {
  themeItems[newTheme].onSelect()
})

const userName = ref(settings.settings.name)
watch(userName, (newName) => {
  settings.updateSettings({
    name: newName
  })
})
</script>

<template>
  <div class="p-4">
    <div class="h-full min-h-[60vh]">
      <div class="ml-4 flex items-center">
        <UIcon name="i-lucide-user" class="!size-5" />
        <div class="pl-2">
          Name
        </div>
      </div>
      <USeparator class="w-28 my-2 ml-4 self-center"
        :ui="{ border: 'dark:border-[#223649] border-[#e7edf4]' }" />
      <UInput class="ml-10 w-74" placeholder="Enter your name..."
        v-model="userName" color="neutral" />
      <div class="ml-4 mt-4 flex items-center">
        <UIcon name="i-lucide-sun-moon" class="!size-5" />
        <div class="pl-2">
          Theme
        </div>
      </div>
      <USeparator class="w-28 my-2 ml-4 self-center"
        :ui="{ border: 'dark:border-[#223649] border-[#e7edf4]' }" />
      <div class="ml-10">
        <UTabs :content="false" :items="themeItems" class="w-full"
          color="neutral" v-model="activeTheme" />
      </div>
    </div>
    <USeparator class="w-full my-2 "
      :ui="{ border: 'dark:border-[#223649] border-[#e7edf4]' }" />
    <div class="text-sm text-balance text-center">
      You may need to refresh the app for changes to take effect
    </div>
  </div>
</template>