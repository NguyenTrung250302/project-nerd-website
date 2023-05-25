<template>
  <header>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.id" :class="{ active: activeItem === item.id }">
          <a href="#" @click="toggleItem(item.id)">{{ item.label }}</a>
          <span v-if="activeItem === item.id" class="dot">&#9679;</span>
          <div v-if="activeItem === item.id">
            {{ item.content }}
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeItem: null,
      navItems: [
        { id: 'home', label: 'Trang chủ', content: 'Nội dung của Trang chủ' },
        { id: 'category', label: 'Danh mục', content: 'Nội dung của Danh mục' },
        { id: 'about', label: 'Về chúng tôi', content: 'Nội dung của Về chúng tôi' },
        { id: 'contact', label: 'Liên hệ', content: 'Nội dung của Liên hệ' }
      ]
    };
  },
  methods: {
    toggleItem(itemId) {
      if (this.activeItem === itemId) {
        this.activeItem = null;
      } else {
        this.activeItem = itemId;
      }
    }
  }
};
</script>

<style scoped>
header {
  background-color: #f2f2f2;
  padding: 10px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  padding: 5px;
}

nav ul li.active a {
  color: #ff0000; /* Màu nổi bật cho mục được chọn */
}

nav ul li a:hover {
  color: #666;
}

div {
  background-color: #fff;
  padding: 10px;
  display: none;
}

.active {
  display: block;
}

.dot {
  margin-left: 5px;
}
</style>
