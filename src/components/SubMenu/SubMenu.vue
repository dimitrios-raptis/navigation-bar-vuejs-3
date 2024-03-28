<template>
  <div class="submenu" :class="{ 'submenu--active': active }">
    <div class="submenu__nav">
      <ul class="submenu__nav-list" role="menu">
        <li
          v-for="(subItem, index) in submenuData"
          :key="subItem.label"
          @mouseenter="showContent(subItem)"
          class="submenu__nav-item"
          :class="{
            'submenu__nav-item--hovered': subItem === activeSubItem,
            'submenu__nav-item--active': isActive[index],
          }"
          ref="submenuItems"
          role="menuItem"
          :aria-expanded="isActive[index]"
          :aria-haspopup="!!subItem.submenu"
        >
          <h2
            class="submenu__nav-item-title"
            @click="toggleMobileAccordion(index)"
          >
            {{ subItem.label }}
          </h2>

          <!-- Mobile Submenu Content -->
          <div class="submenu__content-wrap submenu__content-wrap--mobile">
            <section v-if="subItem" class="submenu__content">
              <article class="submenu__overview">
                <h1 class="submenu__overview-title">
                  {{ subItem.content.overview.title }}
                </h1>
                <p class="submenu__overview-text">
                  {{ subItem.content.overview.text }}
                </p>
                <div
                  class="submenu__overview-links"
                  v-if="
                    subItem.content.links && subItem.content.links.length > 0
                  "
                >
                  <a
                    v-for="link in subItem.content.links"
                    :key="link.text"
                    :href="link.url"
                    class="submenu__overview-anchor"
                  >
                    <img
                      :src="require(`@/assets/images/${link.icon}`)"
                      :alt="`Click here to learn more about ${link.text}`"
                      class="submenu__overview-anchor-icon"
                    />
                    <span>
                      {{ link.text }}
                    </span>
                    <LinkArrow class="submenu__overview-anchor-arrow" />
                  </a>
                </div>
              </article>
            </section>
          </div>
        </li>
      </ul>
    </div>

    <!-- Desktop Submenu Content -->
    <div class="submenu__content-wrap submenu__content-wrap--desktop">
      <div v-if="activeSubItem" class="submenu__content">
        <div class="submenu__overview">
          <h2 class="submenu__overview-title">
            {{ activeSubItem.content.overview.title }}
          </h2>
          <p class="submenu__overview-text">
            {{ activeSubItem.content.overview.text }}
          </p>
          <div
            class="submenu__overview-links"
            v-if="
              activeSubItem.content.links &&
              activeSubItem.content.links.length > 0
            "
          >
            <a
              v-for="link in activeSubItem.content.links"
              :key="link.text"
              :href="link.url"
              class="submenu__overview-anchor"
            >
              <img
                :src="require(`@/assets/images/${link.icon}`)"
                :alt="link.text"
                class="submenu__overview-anchor-icon"
              />
              <span>
                {{ link.text }}
              </span>
              <LinkArrow class="submenu__overview-anchor-arrow" />
            </a>
          </div>
        </div>
        <div class="submenu__capabilities">
          <h3 class="submenu__capabilities-title">
            {{ activeSubItem.content.platformCapabilities.title }}
          </h3>
          <ul>
            <li
              v-for="capability in activeSubItem.content.platformCapabilities
                .list"
              :key="capability"
              class="submenu__capabilities-list-item"
            >
              {{ capability }}
            </li>
          </ul>
        </div>
        <div class="submenu__article">
          <a :href="activeSubItem.content.article.url">
            <img
              :src="
                require(`/src/assets/images/${activeSubItem.content.article.image}`)
              "
              :alt="activeSubItem.content.article.imageAlt"
              class="submenu__article-image"
            />
            <p class="submenu__article-title">
              {{ activeSubItem.content.article.text }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkArrow from "../Icons/LinkArrow.vue";

export default {
  components: {
    LinkArrow,
  },
  props: {
    submenuData: Array,
    active: Boolean,
  },
  data() {
    return {
      activeSubItem: null,
      isActive: Array(this.submenuData.length).fill(false),
    };
  },
  methods: {
    showContent(subItem) {
      this.activeSubItem = subItem;
    },
    toggleMobileAccordion(index) {
      this.isActive[index] = !this.isActive[index];
      // Remove active class from other submenu items
      this.$refs.submenuItems.forEach((_, i) => {
        if (i !== index) {
          this.isActive[i] = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./SubMenu.scss";
</style>
