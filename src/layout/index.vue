<template>
  <div class="layout-container">
    <RouterView v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.path"></component>
      </keep-alive>
    </RouterView>
    <van-tabbar v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item to="/chats" icon="chat-o">Chats</van-tabbar-item>
      <van-tabbar-item to="/contacts" icon="friends-o" dot
        >Contacts</van-tabbar-item
      >
      <van-tabbar-item to="/discover" icon="bulb-o" badge="5"
        >Discover</van-tabbar-item
      >
      <van-tabbar-item to="/me" icon="manager-o" badge="20">Me</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const active = ref(0);
</script>
<style scoped lang="scss">
.layout-container {
}
</style>
