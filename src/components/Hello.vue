<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="hello">
    <v-card class="mx-auto elevation-8 card text-white" color="#2f4a66">
      <v-card-text>
        <div class="text-h5 my-5" >Welcome to the...</div>
        <div class="text-h4 my-5">
            BIS: UPDATE MANAGER
          <v-icon icon="mdi-check-network"></v-icon>
        </div>
        <div class="text-h6 my-5">The ultimate tool for supervising our monthly updates.</div>
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
  margin-top: 1vh;
  width: 99vw;
}
</style>
