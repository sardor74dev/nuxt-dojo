<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <ProductDetails :product="product"/>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const route = useRoute()

const { id } = route.params
const link = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(link, { key: id })

if(!product.value){
    throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
        fatal: true
    })
}
</script>

<style scoped>

</style>