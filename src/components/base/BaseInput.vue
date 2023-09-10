<template>
  <div class="wrapper__input">
    <label for="name">{{ label }}</label>
    <input
      v-model="value"
      id="name"
      type="text"
      placeholder="Введите Id или имя "
      @input="onInput"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { debounce } from "../../lib/helpers";

const props = defineProps({
  label: { type: String, default: "" },
});
const emit = defineEmits(["search-user"]);
const value = ref("");

const onInput = debounce(() => {
  emit("search-user", value.value);
}, 500);
</script>

<style scoped lang="scss">
.wrapper__input {
  margin-bottom: 30px;
  label {
    display: block;
    margin-bottom: 5px;
    color: var(--text-color-dark);
    font-weight: 600;
  }
  input {
    width: 100%;
    outline: none;
    padding: 16px 24px;
    border-radius: 8px;
    border: 2px solid #e9ecef;
  }
}
</style>