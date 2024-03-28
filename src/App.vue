<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
