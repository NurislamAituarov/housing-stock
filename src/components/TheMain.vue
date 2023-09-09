<template>
  <div class="container">
    <TheLeftSidebar />
    <TheRightSidebar />
  </div>
</template>

<script setup>
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightSidebar from "./TheRightSidebar.vue";
</script>


<style scoped lang="scss">
.container {
  max-width: 100%;
  min-height: 575px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 291px 1fr;
}
</style>