<template>
    <ul class="card-list" ref="cardList">
        <li class="card-list__item" v-for="(card, index) in cards" :key="index">
            <Card :description="card.description" :header="card.header" :imageSrc="card.imageSrc" />
        </li>
        <div class="card-list__controllers">
            <button class="card-list__prev" @click="slideLeft">&#8656;</button>
            <button class="card-list__next" @click="slideRight">&#8658;</button>
        </div>
    </ul>
</template>

<script>
import Card from './Card.vue'

export default {
  components: { Card },
    name: 'card-list',
    props: {
        cards: {
            type: Array,
            required: true,
        }
    },
    methods: {
        slideLeft() {
            const cardList = this.$refs.cardList;
            cardList.scrollBy({left: -cardList.clientWidth, top: 0, behavior: 'smooth'});
        },
        slideRight() {
            const cardList = this.$refs.cardList;
            cardList.scrollBy({left: cardList.clientWidth, top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style scoped>
.card-list {
    list-style-type: none;
    padding: 10px 0;
    margin: 0;
    display: flex;
    overflow-x: auto;
    gap: .5rem;
    scroll-snap-type: x mandatory;
    position: relative;
}
.card-list::-webkit-scrollbar {
    width: 0;
}
.card-list__item {
    flex: 0 0 320px;
    scroll-snap-align: start;
}
.card-list__controllers {
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    min-width: 100%;
    float: left;  
    margin-left: -100%;
    pointer-events: none;
}
.card-list__prev,
.card-list__next {
    background-color: #fff;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 10px 2px #8d99ae;
    width: 35px;
    height: 35px;
    font-weight: bold;
    font-size: 20px;
    color: #8e9aaf;
    cursor: pointer;
    pointer-events: all;
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 20px));
    transition: .2s color ease;
}
.card-list__prev:hover,
.card-list__next:hover {
    color: #444649;
}
.card-list__prev {
    left: 5px;
}
.card-list__next {
    right: 5px;
}
@media (max-width: 768px) {
    .card-list__controllers {
        display: none;
    }
}
</style>