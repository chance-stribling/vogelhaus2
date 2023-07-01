<template>
  <v-row class="row">
    <v-col align="center">
        <v-card class="card " height="450px" width="600px" color="orange">
            <v-card-text>
            <h1 class="mb-10">Vogelhaus</h1>
          <div class="text-h6 text-center my-5">
            Login
            <v-icon icon="mdi-bird"></v-icon>
          </div>
          <v-responsive class="mx-auto mt-10" max-width="344">
            <v-text-field v-model="username"  class="mt-5" label="Username" bg-color="white" hide-details="auto"></v-text-field>
            <v-text-field v-model="password"  class="mt-5" label="Password" bg-color="white" hide-details="auto"></v-text-field>
            <v-btn class="mt-5" to="/home">Enter</v-btn>
            <br/>
            <v-btn class="mt-5" height="50px" variant="outlined" to="/register">New User?<br/>Register</v-btn>
          </v-responsive>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.row{
    margin-top: 10vh
}
</style>
<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue';

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()
const username = ref("")
const password = ref("")

const handleSubmit = () => {
    store.verifyPassword(password.value)
}
</script>
