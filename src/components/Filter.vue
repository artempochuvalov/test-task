<template>
    <button class="filter">
        <div class="filter__cover">
            <img class="filter__img" :src="imageSrc" alt="Filter Image">
        </div>
        <span class="filter__text">{{ text }}</span>
    </button>
</template>

<script>
export default {
    name: 'filter',
    props: {
        text: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.filter {
    color: #8d99ae;
    border: none;
    border: 1px solid #8d99ae;
    border-radius: 10px;
    background-color: transparent;
    padding: 5px 8px;
    display: flex;
    align-items: center;
}
.filter__text {
    font-size: 16px;
}
.filter__cover {
    width: 22px;
    height: 22px;
    position: relative;
    margin-right: 5px;
}
.filter__img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
</style>