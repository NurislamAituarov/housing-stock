<template>
  <div class="wrapper">
    <TheHeader />
    <TheMain />
  </div>
</template>


<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
</script>

<style scoped>
.wrapper {
  max-width: 1266px;
  margin: 0 auto;
  padding: 50px 0;
}
</style>
