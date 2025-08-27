<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({ type: String })

const icon = computed(() => {
  if (props.type == 'warning') return "i-lucide-triangle-alert"
  else if (props.type == 'danger') return "i-lucide-octagon-alert"
  else if (props.type == 'tip') return "i-lucide-lightbulb"
  else if (props.type == 'success') return "i-lucide-check-check"
  else return 'i-lucide-info'
})

const iconColor = computed(() => {
  if (props.type == 'warning') return "#f0b100"
  else if (props.type == 'danger') return "#fb2c36"
  else if (props.type == 'tip') return "#d2afff"
  else if (props.type == 'success') return "hsl(130, 51%, 65%)"
  else return '#a7ccff'
})

const outlineColor = computed(() => {
  if (props.type == 'tip') return 'secondary'
  else return props.type
})

</script>
<template>
  <MazCardSpotlight class="mx-4 my-2 " :color="outlineColor">
    <div class="flex items-center">
      <UIcon :name="icon" class="!size-5 min-w-5"
        :style="`color: ${iconColor};`" />
      <USeparator orientation="vertical"
        class="h-7 mx-3 flex items-center justify-center"
        :ui="{ border: 'dark:border-gray-600 h-5' }" />
      <div class="font-bold">
        <slot name="header" />
      </div>
    </div>
    <USeparator class="w-full my-2 flex items-center justify-center"
      :ui="{ border: 'dark:border-gray-600' }" />
    <div class="w-full">
      <slot />
    </div>
  </MazCardSpotlight>
</template>