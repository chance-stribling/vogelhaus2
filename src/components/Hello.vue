<template>
  <div class="hello">
    <v-card class="mx-auto elevation-8 card" max-width="900px" min-width="900px" color="orange">
      <v-card-text>
        <div class="text-h3">Welcome to</div>
        <div class="text-h1 my-5">
          VOGELHAUS
          <v-icon icon="mdi-bird"></v-icon>
        </div>
        <div class="text-h6">The ultimate house manager.</div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({})
}
</script>
<style scoped>
.card {
  margin-top: 25vh;
}
.hello {
  width: 100%;
}
</style>
