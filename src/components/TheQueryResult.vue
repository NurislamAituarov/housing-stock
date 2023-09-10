<template>
  <div class="wrapper__tips">
    <span v-if="queryResult === ''">начните поиск </span>
    <span v-if="queryResult === 'not user'">ничего не найдено </span>
    <span v-if="queryResult === 'pending'"><SpinnerLoader /></span>
  </div>
</template>


<script setup>
import SpinnerLoader from "./SpinnerLoader.vue";

defineProps({
  queryResult: { type: String, default: "" },
});
</script>


<style scoped lang="scss">
.wrapper__tips {
  margin-bottom: 10px;
  span {
    font-size: 14px;
  }
}
</style>