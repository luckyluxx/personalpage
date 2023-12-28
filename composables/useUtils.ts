import { format } from "date-fns"

export const useUtils = () => {
  const sayHello = () => console.log("[composables] Hello")
  const dateNow = () => format(new Date(), 'd MMMM')
  
  return{
    sayHello,
    dateNow,
  }
}