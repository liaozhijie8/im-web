<template>
  <van-swipe-cell>
    <div class="content">
      <div class="avatar">
        <img src="@/assets/logo.svg" alt="avatar" />
      </div>
      <div class="main">
        <p>lili</p>
        <p>say something</p>
      </div>
      <div class="time">
        <p>17:00</p>
      </div>
    </div>
    <template #right>
      <van-button square type="danger" text="删除" class="bnt" />
      <van-button square type="primary" text="收藏" class="bnt" />
    </template>
  </van-swipe-cell>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px 10px;
  .avatar {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    margin-left: 10px;
    width: 75%;
  }
  .time {
    align-self: flex-start;
  }
}
.bnt {
  height: 100%;
}
</style>
