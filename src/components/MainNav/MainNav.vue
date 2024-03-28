<template>
  <ul class="main-nav" role="navigation">
    <li
      v-for="(item, index) in items"
      :key="item.label"
      class="main-nav__item"
      :class="{
        'main-nav__item--with-submenu': !item.link,
        'main-nav__item--active': isOpen[index],
      }"
    >
      <a v-if="item.link" :href="item.link" class="main-nav__link">
        {{ item.label }}
      </a>
      <div
        v-else
        class="main-nav__link"
        @mouseenter="activateItem(item)"
        @mouseleave="deactivateItem(item)"
        @click="toggleMobileAccordion(index)"
        :aria-expanded="isOpen[index].toString()"
      >
        {{ item.label }}
        <CaretDown class="main-nav__submenu-icon" />
      </div>
      <SubMenu v-if="item.submenu" :submenuData="item.submenu" />
    </li>
  </ul>
</template>

<script>
import CaretDown from "../Icons/CaretDown.vue";
import SubMenu from "../SubMenu/SubMenu.vue";

export default {
  components: {
    CaretDown,
    SubMenu,
  },
  data() {
    return {
      isOpen: new Array(this.items.length).fill(false),
    };
  },
  props: {
    items: Array,
  },
  methods: {
    activateItem(item) {
      if (!item.link && item.isActive !== true) {
        item.isActive = true;
      }
    },
    deactivateItem(item) {
      if (!item.link && item.isActive !== false) {
        item.isActive = false;
      }
    },
    toggleMobileAccordion(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
  },
};
</script>

<style scoped lang="scss">
@import "./MainNav.scss";
</style>
