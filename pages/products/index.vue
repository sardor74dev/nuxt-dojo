<template>
    <div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Nuxt Dojo | Merch'
})

definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>