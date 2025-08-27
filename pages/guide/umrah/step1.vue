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

import { useSettingsStore } from '~/stores/localStorage'
const settings = useSettingsStore()

const notes = ref(settings.settings.umrahPlanningNotes)
watch(notes, (newNotes) => {
  settings.updateSettings({
    umrahPlanningNotes: newNotes
  })
})

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