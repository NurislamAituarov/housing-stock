<template>
  <div class="right__sidebar">
    <div class="avatar">
      <PlaceholderImg width="120px" height="120px" />
    </div>
    <div class="user__info">
      <p class="ussr__name">fffffffff</p>

      <div class="user__email">
        <p>email:</p>
        <span>ppppppppppppp</span>
      </div>
      <div class="user__phone">
        <p>phone:</p>
        <span>56666666666666666</span>
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
</template>

<script setup>
import PlaceholderImg from "./svg/PlaceholderImg.vue";
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
</style>