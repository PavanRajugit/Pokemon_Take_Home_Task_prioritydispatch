<template>
  <input
    type="text"
    placeholder="Search Pokémon..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="search"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
</script>

<style scoped>
.search {
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 24px;
  outline: none;
}

.search:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}
</style>
