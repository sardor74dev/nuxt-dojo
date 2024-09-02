// export default defineEventHandler(async() => {
//     try {
//         const { data } = $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_bnwEu9cIbnVyF4HWh1X4er14U3nH16vXbytCsNcH')
//         return data
//     } catch(error){
//         console.error('Failed to fetch data from the currency API:', error)
//         throw createError({
//             statusCode: 500,
//             statusMessage: 'Failed to fetch data from currency API'
//         })
//     }
// })

// // cur_live_bnwEu9cIbnVyF4HWh1X4er14U3nH16vXbytCsNcH

export default defineEventHandler(async () => {
    try {
      const response = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_bnwEu9cIbnVyF4HWh1X4er14U3nH16vXbytCsNcH')
      return response.data
    } catch (error) {
      console.error('Failed to fetch data from the currency API:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch data from the currency API'
      })
    }
  })
  