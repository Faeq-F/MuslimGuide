<script lang="ts" setup>
import { onMounted, ref, useTemplateRef, watch } from 'vue';
import { useThemeHandler } from 'maz-ui'
import { useRoute } from 'vue-router';
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

const themeItems = ref<any[][]>([
  [
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
])

</script>

<template>
  <div class="p-4">
    <div class="ml-4 flex items-center">
      <UIcon name="i-lucide-sun-moon" class="!size-5" />
      <div class="pl-2">
        Theme
      </div>
    </div>
    <USeparator class="w-28 my-2 ml-4 self-center"
      :ui="{ border: 'dark:border-[#223649] border-[#e7edf4]' }" />
    <div class="ml-10">
      <div v-for="(item, index) in themeItems[0]" :key="index">
        <UButton color="neutral" variant="subtle"
          class="flex mb-1 items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800"
          @click="item.onSelect">
          <UIcon :name="item.icon" class="!size-5" />
          <span class="text-sm font-medium">
            {{ item.label }}
          </span>
        </UButton>
      </div>
    </div>
  </div>
</template>