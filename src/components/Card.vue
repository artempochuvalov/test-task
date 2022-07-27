<template>
    <div class="card">
        <div class="card__cover">
            <img class="card__img" :src="imageSrc" alt="Card Image">
        </div>
        <h4 class="card__header">
            {{ header }}
        </h4>
        <p class="card__descr">
            {{ description }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        header: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }

    }
}
</script>

<style scoped>
.card {
    max-width: 300px;
    box-shadow: 0 0 10px 5px #dee2e6;
    border-radius: 10px;
    text-align: center;
    padding-bottom: 15px;
}
.card__cover {
    width: 100%;
    height: 275px;
    position: relative;
    border-radius: 10px 10px 0 0;
    margin-bottom: 10px;
}
.card__img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: inherit;
    object-fit: cover;
}
.card__header {
    font-size: 16px;
    margin: 0;
    margin-bottom: 5px;
}
.card__descr {
    font-size: 14px;
    color: #8d99ae;
    margin: 0;
}
</style>