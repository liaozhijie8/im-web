<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        label-width="50"
        size="large"
        :clearable="true"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        label-width="50"
        :clearable="true"
        size="large"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        register
      </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts">
import { ref } from "vue";
const username = ref("");
const password = ref("");
const onSubmit = (values: any) => {
  console.log("submit", values);
};
</script>
<style scoped lang="scss"></style>
