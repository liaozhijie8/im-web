<template>
  <div class="chats-container">
    <div class="header">
      <div class="title">Weixin({{ count }})</div>
      <div class="addIcon">
        <Popover v-model="display" :actions-value="actions">
          <template #content>
            <van-icon name="add-o" size="20px" @click="setAdd" />
          </template>
        </Popover>
      </div>
    </div>

    <div class="search-box">
      <van-icon name="search" size="20px" />
      <span>Search</span>
    </div>
    <div class="chart-list">
      <ChartItem></ChartItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Popover from "@/components/popover/index.vue";
import ChartItem from "./components/chart-item/index.vue";
const count = ref(10);
const display = ref(true);
const setAdd = () => {
  console.log(display.value);
  display.value = !display.value;
};
const actions = [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }];
</script>
<style scoped lang="scss">
.chats-container {
  height: 2000px;
  background-color: rgb(231, 221, 221);
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    z-index: 3;
    background-color: rgb(231, 221, 221);
    .title {
      font-size: 18px;
    }
    .addIcon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .search-box {
    height: 40px;
    margin: 0 5px;
    margin-top: 50px;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
    line-height: 40px;
    span {
      color: rgb(146, 140, 140);
    }
  }
  .chart-list {
    margin-top: 20px;
  }
}
</style>
