<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { useThemeHandler } from 'maz-ui'
const themeHandler = useThemeHandler({
  watchChanges: true,
})
const theme = ref(themeHandler.selectedTheme.value)
watch(themeHandler.selectedTheme, async (newTheme, _oldTheme) => theme.value = newTheme.toString())

const notes = ref('')
notes.value = `You will need to do some planning for your journey.

Click the first button in the toolbar to open/hide the editing pane (saves automatically)

Here is a checklist of items and preparations you should consider before embarking on your pilgrimage:

I will need to bring with me / buy the following:
- Ihram clothes
- Comfortable walking shoes
- Sunglasses, Umbrella, Sun hat / cap
- Sunscreen
- Reusable water bottle
- Personal hygiene items (toothbrush, toothpaste, miswak, wet wipes, hand sanitizer)
- Medications (if any), plasters, bandages
- Snacks (for long days)
- Small backpack or bag (to carry essentials during the day)
- Small bottle or bag for stones
- Prayer mat
- Small towel
- Smartphone
- Travel documents (passport, visa, ID, boarding cards, etc.)
- Money (local currency and/or credit cards)
- Guidebook or map
- Contact information for emergency situations
- Any necessary health documents (vaccination records, prescriptions)
- Quran; dua and Umrah books
- Sleeping Bag
- Sanitary pads (women)
- Tissues (non perfumed)
- Clothes for at least two days
- Non-perfumed and normal soap
- hairbrush, Alarm, PATIENCE
`

import type { ToolbarNames } from 'md-editor-v3';

const toolbars: ToolbarNames[] = [
  'previewOnly',
  '-',
  'revoke',
  'next',
  '-',
  'bold',
  'underline',
  'italic',
  'strikeThrough',
  '-',
  'title',
  'sub',
  'sup',
  'quote',
  'link',
  'unorderedList',
  'orderedList',
  'task',
  'table',
  '-',
  'codeRow',
  'mermaid',
  'katex',
];

onMounted(() => {
  document.getElementsByClassName('md-editor-toolbar-item')[0].click()
});

</script>
<template>
  <MdEditor :theme="theme" previewTheme="github" codeTheme="github"
    language="en-US" class="!bg-transparent !h-full" v-model="notes"
    :toolbars="toolbars" />
</template>

<style>
.github-theme {
  word-break: break-word !important;
}
</style>