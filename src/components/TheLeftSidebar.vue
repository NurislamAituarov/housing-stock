<template>
  <div class="left__sidebar">
    <BaseInput label="Поиск сотрудников" @search-user="searchUser" />

    <p>Результаты</p>
    <span>начните поиск </span>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import BaseInput from "./base/BaseInput.vue";
const store = useStore();

async function searchUser(value) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${value}`
  );
  const data = await res.json();
  store.dispatch("addUser", data);
}
</script>

<style scoped lang="scss">
.left__sidebar {
  border-right: 1px solid #e0e0e0;
  padding: 30px 20px;

  p {
    color: var(--text-color-dark);
  }
  span {
    font-size: 14px;
  }
}
</style>