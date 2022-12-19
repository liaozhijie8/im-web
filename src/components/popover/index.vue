<template>
  <van-popover
    :v-model:show="modelValue"
    :actions="actionsValue"
    placement="bottom-end"
    @closed="closedEvent"
  >
    <template #reference>
      <slot name="content"></slot>
    </template>
  </van-popover>
</template>
<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  actionsValue: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
const emits = defineEmits(["update:modelValue"]);
const closedEvent = () => {
  emits("update:modelValue", false);
};
</script>
<style scoped lang="scss"></style>
