export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false
  // remember to is a destination
  if (isLoggedIn) {
    navigateTo(to.fullPath)
  }
  navigateTo('/login')
  console.log("Middleware Auth is Here")
})
