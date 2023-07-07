<script setup>
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
</script>

<template>
  <v-app app>
    <TopBar />
    <v-container fluid class="pa-0">
      <v-main>
        <RouterView />
      </v-main>
    </v-container>
  </v-app>
</template>

<style scoped></style>
