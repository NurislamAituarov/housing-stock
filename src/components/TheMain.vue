<template>
  <div class="container">
    <TheLeftSidebar />
    <TheRightSidebar :user="store.state.users[0]" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightSidebar from "./TheRightSidebar.vue";

const store = useStore();
</script>


<style scoped lang="scss">
.container {
  max-width: 100%;
  height: 575px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 340px 1fr;
}
</style>