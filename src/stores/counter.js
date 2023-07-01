import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const secretCode = ref("jules")
  const count = ref(0)
  const authenticated = ref(false)
  const doubleCount = computed(() => count.value * 2)

  const verifyPassword = (password) =>{
    if(password == secretCode){
      authenticated = true;
    }
    else{
      authenticated = false;
    }
  }
  return { count, doubleCount, increment, secretCode, verifyPassword }
})
