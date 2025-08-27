<template>
  <div>
    <UButton ref="addBtn" class="add-button" @click="clickCallback"
      color='neutral'>
      Add this App to your Home Screen
    </UButton>
  </div>
</template>

<script>
export default {
  methods: {
    clickCallback() {
      window.AddToHomeScreenInstance.show('en');
    }
  },
}

</script>