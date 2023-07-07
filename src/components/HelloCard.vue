<template>
  <div class="hello">
    <v-row>
      <v-col align="center">
        <v-card class="elevation-8 card text-white my-5" color="#2f4a66">
          <v-card-text>
            <div class="text-h6 my-5">Current update is...</div>
            <div class="text-h5 my-5">
              <v-icon icon="mdi-check-network"></v-icon>
              2307
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col align="center">
        <div class="select">
          <v-select
            class="my-5 text-white"
            bg-color="#2f4a66"
            label="Phase"
            v-model="phase"
            :items="phases"
            item-title="phaseName"
            item-value="value"
            return-object
          ></v-select>
        </div>
        <div class="select">
          <v-select
            class="my-5 text-white"
            bg-color="#2f4a66"
            label="Sort"
            :items="['Alphbetically', 'By ID']"
          ></v-select>
        </div>
      </v-col>
    </v-row>
    <v-card
      height="250px"
      width="90vw"
      color="#2f4a66"
      class="my-2 mx-auto text-white"
      v-for="county in filters(phase.value)"
      :key="county.id"
    >
      <v-row class="pa-2">
        <v-col>
          <v-card-text class="text-white my-5">
            <h1 class="my-5">{{ county.name }}</h1>
            <h3 class="my-5">County ID: {{ county.id }}</h3>
            <h3 class="my-5">Phase {{ county.phase }}</h3>
            <h2 class="my-5" v-if="county.east">Eastern Time</h2>
            <h4 class="my-5" v-else>Central Time</h4>
          </v-card-text>
        </v-col>
        <v-col>
          <v-checkbox class="mt-10" label="Salt Email"> </v-checkbox>
          <v-checkbox label="SQL Present"> </v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox label="Error"></v-checkbox>
          <v-textarea clearable label="Comment(s)"></v-textarea>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<style scoped>
.select {
  width: 30vw;
}
.card {
  margin-top: 1vh;
  width: 30vw;
}
</style>
<script>
export default {
  data: () => ({
    phase: {
      phaseName: "Phase 1",
      value: 1
    },
    phases:[
      {
        phaseName: "Phase 1",
        value: 1
      },
      {
        phaseName: "Phase 2",
        value: 2
      },
      {
        phaseName: "Phase 3",
        value: 3
      },
      {
        phaseName: "Phase 4",
        value: 4
      },
      {
        phaseName: "Phase 5",
        value: 5
      },
    ],
    counties: [
      {
        id: 1,
        name: 'Anderson',
        saturday: false,
        east: true,
        kiosk: true,
        phase: 4
      },
      {
        id: 2,
        name: 'Bedford',
        saturday: true,
        east: false,
        kiosk: true,
        phase: 3
      },
      {
        id: 3,
        name: 'Benton',
        saturday: false,
        east: false,
        kiosk: true,
        phase: 4
      },
      {
        id: 4,
        name: 'Bledsoe',
        saturday: true,
        east: false,
        kiosk: true,
        phase: 3
      },
      {
        id: 5,
        name: 'Blount',
        saturday: false,
        east: true,
        kiosk: true,
        phase: 5
      },
      {
        id: 6,
        name: 'Bradley',
        saturday: false,
        east: true,
        kiosk: true,
        phase: 4
      },
      {
        id: 7,
        name: 'Campbell',
        saturday: true,
        east: true,
        kiosk: true,
        phase: 3
      },
      {
        id: 8,
        name: 'Cannon',
        saturday: true,
        east: false,
        kiosk: true,
        phase: 3
      },
      {
        id: 9,
        name: 'Carroll',
        saturday: false,
        east: false,
        kiosk: true,
        phase: 1
      },
      {
        id: 10,
        name: 'Carter',
        saturday: true,
        east: true,
        kiosk: true,
        phase: 3
      },
      {
        id: 11,
        name: 'Cheatam',
        saturday: true,
        east: false,
        kiosk: true,
        phase: 1
      },
      {
        id: 12,
        name: 'Chester',
        saturday: false,
        east: false,
        kiosk: true,
        phase: 2
      },
      {
        id: 13,
        name: 'Claiborne',
        saturday: false,
        east: true,
        kiosk: false,
        phase: 4
      },
      {
        id: 14,
        name: 'Clay',
        saturday: true,
        east: false,
        kiosk: false,
        phase: 3
      }
    ],
  }),
  methods:{
    filters(phaseNum){
      return this.counties.filter(county=>county.phase===phaseNum);
    }
  }

}
</script>
