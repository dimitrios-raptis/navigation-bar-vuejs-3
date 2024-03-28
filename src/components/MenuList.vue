<template>
  <ul class="menu">
    <menu-item
      v-for="item in items"
      :key="item.label"
      item="item"
      @click="handleItemClick(item)"
    />
  </ul>
</template>

<script>
import MenuItem from "./MenuItem/MenuItem.vue";

export default {
  components: {
    MenuItem,
  },
  props: {
    items: Array,
  },
  methods: {
    handleItemClick(item) {
      this.$emit("clickItem", item);
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  list-style: none;
  padding: 0;
}

.menu li {
  margin-right: 20px;
}
</style>
