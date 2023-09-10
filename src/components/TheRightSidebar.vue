<template>
  <div v-if="store.state.user" class="right__sidebar">
    <div class="avatar">
      <PlaceholderImg width="120px" height="120px" />
    </div>
    <div class="user__info">
      <p class="ussr__name">{{ store.state.user.name }}</p>

      <div class="user__email">
        <p>email:</p>
        <span>{{ store.state.user.email }}</span>
      </div>
      <div class="user__phone">
        <p>phone:</p>
        <span>{{ store.state.user.phone }}</span>
      </div>

      <div class="user__about">
        <p>О себе:</p>
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</span
        >
      </div>
    </div>
  </div>

  <div v-else class="not-user__wrapper">
    <p>Выберите сотрудника, чтобы посмотреть его профиль</p>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import PlaceholderImg from "./svg/PlaceholderImg.vue";

defineProps({
  user: { type: Object, default: {} },
});

const store = useStore();
</script>

<style scoped lang="scss">
.right__sidebar {
  padding: 30px 20px;
  display: flex;
  gap: 80px;
  .avatar {
    flex: 1;
    height: 286px;
    border: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user__info {
    flex: 1;
    .ussr__name {
      color: black;
      font-weight: 600;
    }

    div {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      margin-bottom: 5px;
      p {
        color: var(--text-color-dark);
        font-weight: 600;
      }
    }
    .user__about {
      display: block;
      margin-top: 20px;
    }
  }
}

.not-user__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
  }
}
</style>