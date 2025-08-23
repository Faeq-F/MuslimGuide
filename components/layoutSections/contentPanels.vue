<script lang="ts" setup>
</script>

<template>
  <div class="p-8 h-full w-full">
    <div class="flex h-full w-full">
      <UCard
        class="m-4 h-full w-96 opacity-80 cardShadow border border-[var(--ui-border)]">
        <template #header>
          <slot name="left-panel-header"></slot>
        </template>

        <div class="min-h-[60vh]">
          <slot name="left-panel-content"></slot>
        </div>

        <template #footer>
          <slot name="left-panel-footer"></slot>
        </template>
      </UCard>
      <!-- Snap scroll these or transition them -->
      <div id="contentPanelsContent"
        class="flex flex-col h-full w-full mr-8 mt-4 overflow-y-scroll overflow-x-hidden snap-mandatory snap-y"
        data-lenis-prevent>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>