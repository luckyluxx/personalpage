export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      sayName: (msg: string) => console.log('[plugins] yourname is ' + msg)
    }
  }
})