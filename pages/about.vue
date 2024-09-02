<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint minus, illo voluptatem est quibusdam enim quod ut tempore incidunt voluptatibus dignissimos ullam, accusantium fuga vitae veniam iusto. Nostrum, nesciunt tempore?
        Cupiditate error sunt voluptate vitae neque veniam ullam voluptatem cumque atque vero aspernatur, minima eius perferendis quidem officiis soluta ut! Quos perferendis ducimus cumque qui fugit sapiente voluptatem voluptatum ex?
        Rem velit quos ullam assumenda, nulla nostrum mollitia ut deserunt ex quaerat omnis quod unde esse iusto magnam aperiam? Eaque voluptates doloremque harum rerum deleniti rem accusantium culpa veniam quisquam!
        Aperiam officiis cupiditate a nisi quos placeat illum similique error sequi perspiciatis. Dolorem ducimus minus tempore fugiat fuga minima excepturi repellat amet consequatur inventore? Quos est praesentium quod dicta magni.
        Saepe, porro sit? Maxime accusamus magni ullam, accusantium, qui iusto, totam nisi consequatur repudiandae optio eveniet similique. Sint repellat, accusamus nesciunt esse quis exercitationem reprehenderit, consequatur explicabo laudantium voluptatem eum.
        Illo dignissimos repellat voluptatibus autem odio accusamus sequi nemo, repudiandae voluptas id modi iure, obcaecati hic ullam dolores corporis harum officiis distinctio mollitia ad illum culpa vero cumque rem. Nostrum!
        Dolorum officia accusamus distinctio, tenetur reprehenderit deleniti soluta eum repudiandae voluptatem. Veniam tenetur amet aperiam facilis laboriosam sit esse praesentium cum voluptatum, molestiae, assumenda voluptates nulla at vitae iste excepturi.
        Ut placeat rem iusto in quae. Mollitia nostrum vitae blanditiis excepturi id voluptatibus tempore esse fuga repellendus asperiores dignissimos illum nihil saepe eos consectetur minima quo nesciunt, possimus sint dolorum!
        Sit aliquam maiores eius necessitatibus fugiat dolore accusantium id mollitia. Autem quidem accusamus inventore quo hic esse sapiente delectus sed, dolor, modi dignissimos ad! Placeat nostrum aut ea omnis neque?
        Incidunt odio cumque quas eius accusantium doloribus modi possimus ipsa impedit! Totam odio possimus ducimus suscipit velit vel voluptate eligendi, obcaecati fuga cum modi non expedita dolores voluptatem a delectus.
        At adipisci, tempore illum officia amet sint nulla quod porro similique vitae. Animi atque dolor ipsam modi beatae earum. Itaque at doloribus quae, eum molestias fugit molestiae accusantium magni! Id!
        Magnam, velit veniam facilis vero, deserunt numquam laboriosam alias quia quidem sequi assumenda nulla aut aspernatur animi placeat earum modi explicabo cupiditate necessitatibus dicta hic dignissimos aperiam! Sit, cum ipsa!</p>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '#app'

const data = ref(null)
const error = ref(null)
const loading = ref(true)

const fetchData = async () => {
  try {
    const { data: fetchedData, error: fetchError, pending } = await useFetch('/api/currency/GBP')
    if (fetchError.value) {
      throw fetchError.value
    }
    data.value = fetchedData.value
  } catch (err) {
    error.value = err
  } finally {
    loading.value = false
  }
}

onMounted(fetchData)
</script>

<style scoped>
h2 {
    font-size: 24px;
}
</style>