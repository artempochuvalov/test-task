<template>
  <ul class="category-list">
    <li class="category-list__item" v-for="(category, index) in categories" :key="index">
        <Category :cards="category.cards" :categoryName="category.categoryName" />
    </li>
  </ul>
</template>

<script>
import Category from './Category.vue'

export default {
  components: { Category },
    name: 'category-list',
    data() {
        return {
            categories: [
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                },
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                },
                {
                    categoryName: 'Lorem',
                    cards: [
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                        {header: 'Lorem', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, quas.', imageSrc: '/images/iphone.jpg'},
                    ]
                }
            ]
        }
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