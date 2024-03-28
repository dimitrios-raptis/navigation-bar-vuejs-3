<template>
  <header class="header">
    <LogoIcon />
    <nav
      class="navigation"
      :class="{ 'navigation--active': isNavigationActive }"
      role="navigation"
    >
      <MainNav :items="menuItems" />
    </nav>
    <div class="header__burger" @click="toggleNavigation">
      <BurgerIcon :aria-expanded="isNavigationActive.toString()" />
    </div>
  </header>
</template>

<script>
import MainNav from "../MainNav/MainNav.vue";
import LogoIcon from "../Icons/LogoIcon.vue";
import BurgerIcon from "../Icons/BurgerIcon.vue";
import mainNavData from "../../assets/data/mainNavData";

export default {
  components: {
    LogoIcon,
    MainNav,
    BurgerIcon,
  },
  data() {
    return {
      menuItems: mainNavData,
      isNavigationActive: false,
    };
  },
  methods: {
    toggleNavigation() {
      this.isNavigationActive = !this.isNavigationActive;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./HeaderComponent.scss";
</style>
