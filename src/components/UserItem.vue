<template>
  <div
    v-for="user of store.state.users"
    :key="user.id"
    class="user__item"
    :class="{ active: store.state.user?.id === user.id }"
    @click="store.dispatch('chooseUser', user)"
  >
    <div class="item__avatar">
      <PlaceholderImg height="30px" />
    </div>

    <div class="item__info">
      <p>{{ user.name }}</p>
      <span>{{ user.email }}</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import PlaceholderImg from "./svg/PlaceholderImg.vue";

const store = useStore();
</script>


<style scoped lang="scss">
.user__item {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  margin: 10px 0;
  overflow: hidden;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
    border: 1px solid #e0e0e0;
    .item__info {
      transition: 0.3s;
      background-color: #e0e0e0;
    }
  }
  .item__avatar {
    border-right: 1px solid #e0e0e0;
    min-width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item__info {
    flex: 1;
    padding: 12.5px 20px;
    font-size: 14px;
  }
}

.active {
  border: 1px solid #e0e0e0;
  .item__info {
    transition: 0.3s;
    background-color: #e0e0e0;
  }
}
</style>