<template>
    <div class="card flex flex-col justify-end text-center">
        <img :src="product.image" alt="product thumb" class="thumb">
        <div>
            <p class="font-bold text-gray-500 m-4 truncate">
                {{ product.title }}
            </p>
            <NuxtLink :to="`/products/${product.id}`">
                <p class="btn hover:bg-[#15d4a0] my-4">View Details</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 150px;
    max-width: 70%;
    margin: 0 auto;
}
</style>

