<template>
  <ul class="category-list">
    <li class="category-list__item" v-for="(category, index) in categories" :key="index">
        <Category :cards="category.cards" :categoryName="category.categoryName" />
    </li>
  </ul>
</template>

<script>
import Category from './Category.vue'
import {mapState} from 'vuex'

export default {
  components: { Category },
    name: 'category-list',
    computed: {
        ...mapState({
            categories: state => state.categories,
        })
    }
}
</script>

<style scoped>
.category-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>