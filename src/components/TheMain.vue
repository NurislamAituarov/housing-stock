<template>
  <div class="container">
    <TheLeftSidebar />
    <TheRightMain :user="store.state.users[0]" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import TheLeftSidebar from "./TheLeftSidebar.vue";
import TheRightMain from "./TheRightMain.vue";

const store = useStore();
</script>


<style scoped lang="scss">
.container {
  max-width: 100%;
  min-height: 575px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 340px 1fr;
}

@media screen and (max-width: 760px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>