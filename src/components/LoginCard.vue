<template>
  <v-row class="row">
    <v-col align="center">
      <v-card class="card" height="560px" width="600px" color="#2f4a66">
        <v-card-text>
          <h1 class="my-10 text-white">BIS: Update Manager</h1>
          <div class="image mx-auto"></div>
          <v-responsive class="mx-auto mt-10" max-width="344">
            <v-text-field
              v-model="username"
              class="mt-5"
              label="Username"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              v-model="password"
              class="mt-5"
              label="Password"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-btn class="mt-5">Enter</v-btn>
            <br />
            <v-btn class="mt-5 text-white" height="50px" variant="outlined" to="/register"
              >New User?<br />Register</v-btn
            >
          </v-responsive>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.row {
  margin-top: 10vh;
}
.image {
  background-image: url('../assets/bis-logo.png');
  height: 100px;
  width: 100px;
}
</style>
<script setup>
import { ref } from 'vue'

// access the `store` variable anywhere in the component ✨
const username = ref('')
const password = ref('')
</script>
