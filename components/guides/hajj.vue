<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useGuidesStore } from '~/stores/guides'
import { useRouter } from "vue-router"
const router = useRouter();

const guides = useGuidesStore()
import type { StepperItem } from '@nuxt/ui'
const items = ref<StepperItem[]>(
  guides.hajj.map((step, index) => ({
    title: step.name,
    description: step.description,
    contentComponent: step.contentComponent,
    icon: 'i-tabler-number-' + index + '-small'
  }))
);
const unhighlighted = ref(-1);

function addTimelineHandlers() {
  if (document.getElementById('stepper')) {
    Array.from(document.getElementById('stepper')!.children[0].children).forEach((div, i) => {
      div.addEventListener('click', () => {
        router.push('/guide/hajj/step' + i);
      });
    })
  }
}

onMounted(() => {
  addTimelineHandlers()
});
</script>
<template>
  <div>
    <UStepper orientation="vertical" class="h-full pb-4 pl-4 w-full stepper"
      :items="items" disabled v-model="unhighlighted" :ui="{
        separator: 'h-7 transition-all ease-in-out duration-200',
        item: 'mt-4 p-1 pr-2 rounded-2xl outline-[#e7edf4] dark:outline-[#223649] outline-2',
        indicator: 'transition-all ease-in-out duration-200',
        trigger: 'transition-all ease-in-out duration-200',
        icon: '!size-8'
      }" id="stepper" />
  </div>
</template>