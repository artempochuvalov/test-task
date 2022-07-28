<template>
  <ul class="filter-list" :class="{'hide' : !show}">
    <li class="filter-list__item" v-for="(filter, index) in filters" :key="index">
        <Filter :imageSrc="filter.imageSrc" :text="filter.text" />
    </li>
  </ul>
</template>

<script>
import Filter from './Filter.vue'
import {mapState} from 'vuex'

export default {
    components: { Filter },
    name: 'filter-list',
    data() {
        return {
            latestTopScroll: 0,
            show: true,
        }
    },
    computed: {
        ...mapState({
            filters: state => state.filters,
        })
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY;
            if (scrollTop > this.latestTopScroll && this.latestTopScroll !== 0) {
                this.show = false;
            }
            else {
                this.show = true;
            }
            this.latestTopScroll = scrollTop;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    }
}
</script>

<style scoped>
.filter-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding: 15px;
    width: 100%;
    background-color: #fff;
    display: flex;
    gap: .75rem;
    overflow-x: auto;
    position: fixed;
    top: 0;
    transition: .3s ease top;
    z-index: 100;
}
.filter-list.hide {
    top: -100vh;
}
.filter-list::-webkit-scrollbar {
    width: 0;
}
.filter-list__item {
    flex-basis: 110px;
}
</style>