<template>
  <v-btn icon="mdi-arrow-left" to="/" variant="outlined" color="black"></v-btn>
  <v-row class="row">
    <v-col align="center">
      <v-card class="card" width="600px" color="#2f4a66">
        <v-card-text>
          <div class="text-h4 text-white text-center my-5">Register</div>
          <v-responsive class="mx-auto" max-width="344">
            <v-text-field
              class="mt-5"
              label="Name"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              class="mt-5"
              label="Email"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              class="mt-5"
              label="Username"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              class="mt-5"
              label="Password"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              class="mt-5"
              label="Confirm Password"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              class="mt-5"
              label="Recovery Key"
              bg-color="white"
              hide-details="auto"
            ></v-text-field>

            <v-btn class="my-5">Submit</v-btn>
          </v-responsive>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<style scoped>
.row {
  margin-top: 0vh;
}
</style>
