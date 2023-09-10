<template>
  <div class="left__sidebar">
    <BaseInput label="Поиск сотрудников" @search-user="searchUser" />

    <p>Результаты</p>
    <TheQueryResult
      v-if="!store.state.users.length || queryResult === 'not user'"
      :queryResult="queryResult"
    />
    <UserItem />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

import BaseInput from "./base/BaseInput.vue";
import UserItem from "./UserItem.vue";
import TheQueryResult from "./TheQueryResult.vue";

const store = useStore();
const queryResult = ref("");

async function searchUser(value) {
  if (!value) {
    store.dispatch("removeUsers");
    queryResult.value = "";
    return;
  }

  const isValue = isNaN(value) ? "" : value;
  queryResult.value = "pending";
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${isValue}`
    );

    if (res.status === 404) {
      store.dispatch("removeUsers");
      throw "not user";
    }

    const data = await res.json();
    // Для проверки на массив или объект в ответе от сервера в зависимости от запроса по имени или ID
    const users = Array.isArray(data) ? getUserByName(data, value) : data;

    queryResult.value = "success";
    // Если поиск по имени и в ответе в массиве нет имени
    if (Array.isArray(users) && !users.length) queryResult.value = "not user";

    store.dispatch("addUser", users);
  } catch (err) {
    queryResult.value = err;
  }
}

function getUserByName(arr, text) {
  const filteredUsers = arr.filter((el) => {
    return el.name.toLowerCase().includes(text.toLowerCase());
  });

  return filteredUsers;
}
</script>

<style scoped lang="scss">
.left__sidebar {
  border-right: 1px solid #e0e0e0;
  padding: 30px 20px;
  overflow-y: auto;

  p {
    color: var(--text-color-dark);
    font-weight: 600;
  }
  span {
    font-size: 14px;
  }
}
</style>