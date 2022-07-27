<template>
    <div class="category">
        <div class="category__info">
            <h2 class="category__title">
                {{ categoryName }}
            </h2>
            <a href="#" class="category__link">
                Посмотреть все товары
            </a>
        </div>
        <card-list :cards="cards" />
    </div>
</template>

<script>
import CardList from './CardList.vue'

export default {
  components: { CardList },
    name: 'category',
    props: {
        categoryName: {
            type: String,
            required: true,
        },
        cards: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.category__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}
.category__title {
    font-size: 22px;
    margin: 0;
}
.category__link {
    text-decoration: none;
    color: #4361ee;
    font-size: 14px;
    margin: 0;
}
</style>