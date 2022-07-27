<template>
  <div class="container">
    <header class="header">
      <filter-list />
    </header>
    <main class="main">
      <category-list />
    </main>
  </div>
</template>

<script>
import CategoryList from './components/CategoryList.vue';
import FilterList from './components/FilterList.vue';

export default {
  components: {FilterList, CategoryList, },  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}
.main {
  padding: 90px 0 10px;
}
</style>