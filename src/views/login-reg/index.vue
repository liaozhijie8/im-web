<template>
  <div class="container">
    <div class="logo-box">
      <div class="img-box">
        <img src="@/assets/logo.svg" alt="logp" />
      </div>
    </div>
    <Login v-if="states === 'login'"></Login>
    <Register v-else></Register>
    <div class="tip">
      <span @click="clickEvent">{{
        states !== "login" ? ">>have a account? Login!" : ">>go to register?"
      }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUpdated } from "vue";
import { useRoute, useRouter, type RouteRecordName } from "vue-router";
import Login from "../components/login/index.vue";
import Register from "../components/register/index.vue";
const states = ref<RouteRecordName | null | undefined>("login");
const route = useRoute();
const router = useRouter();
onMounted(() => {
  states.value = route.name;
});
onUpdated(() => {
  states.value = route.name;
});
const clickEvent = () => {
  if (states.value === "login") {
    router.push("/register");
  } else {
    router.push("/login");
  }
};
</script>
<style scoped lang="scss">
.container {
  .logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
    .img-box {
      width: 100px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .tip {
    padding: 0 20px;
    text-align: end;
    font-size: 14px;
    span {
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
  }
}
</style>
