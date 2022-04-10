<script setup lang="ts">
const props = defineProps({
  content: String
});
const emit = defineEmits(['change']);
const onClick = () => {
  emit('change', props.content);
};
</script>

<template>
  <button style="border: 1px solid #ddd" @click="onClick">{{ props.content }}</button>
</template>

