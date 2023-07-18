<template>
  <div class="hello">
    <v-row>
      <v-col align="center">
        <v-card class="elevation-8 card text-white my-5" color="primary">
          <v-card-text>
            <div class="text-h6 my-5">Current update is...</div>
            <div class="text-h5 my-5">
              <v-icon icon="mdi-check-network"></v-icon>
              {{ currentUpdate }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col align="center">
        <div style="padding-top: 100px">
          <!--  -->
          
          <v-dialog
            v-model="dialog"
            fullscreen
            :scrim="false"
            transition="dialog-bottom-transition"
          >
          
            <template v-slot:activator="{ props }">
              
              <v-btn
              v-bind="props"
              size="x-large"
              class="mx-5"
              color="black"
              icon="mdi-printer"
              ></v-btn>
            </template>
            <v-card>
              <v-toolbar
                dark
                color="primary"
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Print Preview</v-toolbar-title>
              </v-toolbar>
              <div class="main">
          
          <v-row justify="center" class="my-10">
          <v-col>
              <v-spacer></v-spacer>
          </v-col>
          <v-col align="center">
              <v-tooltip text="Export to PDF" location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="mx-5"
                  size="x-large"
                  color="black"
                  icon="mdi-export"
                  @click="exportToPDF"
                ></v-btn>
              </template>
            </v-tooltip>
            <v-tooltip text="Email Support" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                size="x-large"
                class="mx-5"
          
                color="black"
                icon="mdi-email"
              ></v-btn>
            </template>
          </v-tooltip>
          </v-col>
          <v-col>
              <v-spacer></v-spacer>
          </v-col>
          </v-row>
          <div id="pdf-content">
          <div>
          <h3 class="text-center text-black">Showing {{ getCount(phase.value) }} Counties</h3>
          </div>
          <v-card
          variant="outlined"
          height="180px"
          width="700px"
          color="black"
          class="my-5 mx-auto text-black"
          v-for="county in filters(phase.value)"
          :key="county.id"
          >
          <v-row class="pa-2">
          <v-col cols="4">
            <v-card-text class="text-black">
              <h2>{{ county.name }}</h2>
              <h3>County ID: {{ county.id }}</h3>
              <h3>Phase {{ county.phase }}</h3>
              <h4 v-if="county.east">Eastern Time</h4>
              <h4 v-else>Central Time</h4>
            </v-card-text>
          </v-col>
          <v-col cols="3">
            <v-checkbox readonly density="compact" v-model="county.salt" label="Salt Email"> </v-checkbox>
            <v-checkbox readonly density="compact" v-model="county.sqlPres" label="SQL Present"> </v-checkbox>
            <v-checkbox readonly density="compact" v-model="county.errorPresent" label="Error"></v-checkbox>
          </v-col>
          
          <v-col cols="5">
            <v-sheet
              style="border: 1px; padding: 5px; border-style: solid"
              height="160px"
              class="text-p"
              >{{ county.error }}</v-sheet
            >
          </v-col>
          </v-row>
          </v-card>
          </div>
          </div>
            </v-card>
          </v-dialog>

        </div>
      </v-col>
      <v-col align="center">
        <div class="select">
          <v-select
            class="my-5 text-white"
            bg-color="primary"
            label="Phase"
            v-model="phase"
            :items="phases"
            item-title="phaseName"
            item-value="value"
            return-object
          ></v-select>
        </div>
        <!-- <div class="select">
          <v-select
            class="my-5 text-white"
            bg-color="#2f4a66"
            label="Sort"
            :items="['Alphbetically', 'By ID']"
          ></v-select>
        </div> -->
      </v-col>
    </v-row>
 
    <div>
      <div>
        <h1 class="text-center">Showing {{ getCount(phase.value) }} Counties</h1>
      </div>
      <v-card
        height="250px"
        width="90vw"
        color="primary"
        class="my-2 mx-auto text-white px-10"
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
              <h2 class="my-5" v-else>Central Time</h2>
            </v-card-text>
          </v-col>
          <v-col>
            <v-checkbox class="mt-10" v-model="county.salt" label="Salt Email"> </v-checkbox>
            <v-checkbox label="SQL Present" v-model="county.sqlPres"> </v-checkbox>
          </v-col>
          <v-col>
            <v-checkbox v-model="county.errorPresent" label="Error"></v-checkbox>
            <v-textarea v-model="county.error" clearable label="Comment(s)"></v-textarea>
          </v-col>
        </v-row>
      </v-card>
    </div>
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
import { useCounterStore } from '../stores/counter.js'
import html2pdf from 'html2pdf.js'

export default {
  data: () => ({
    dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
    store: useCounterStore(),
    printVersion: false,
    currentUpdate: '',
    phase: {
      phaseName: 'All Counties',
      value: 0
    },
    phases: [
      {
        phaseName: 'All Counties',
        value: 0
      },
      {
        phaseName: 'Phase 1',
        value: 1
      },
      {
        phaseName: 'Phase 2',
        value: 2
      },

      {
        phaseName: 'Phase 3',
        value: 3
      },
      {
        phaseName: 'Phase 4',
        value: 4
      },
      {
        phaseName: 'Phase 5',
        value: 5
      }
    ]
  }),
  mounted() {
    this.getDate()
  },
  methods: {
    filters(phaseNum) {
      if (phaseNum == 0) {
        return this.store.counties
      } else {
        return this.store.counties.filter((county) => county.phase === phaseNum)
      }
    },
    getCount(phaseNum) {
      if (phaseNum == 0) {
        return this.store.counties.length
      } else {
        return this.store.counties.filter((county) => county.phase === phaseNum).length
      }
    },
    getDate() {
      var currentDate = new Date()
      if (currentDate.getMonth() > 9) {
        this.currentUpdate =
          String(currentDate.getFullYear()).slice(-2) + (currentDate.getMonth() + 1)
      } else {
        this.currentUpdate =
          String(currentDate.getFullYear()).slice(-2) + '0' + (currentDate.getMonth() + 1)
      }
    },
    exportToPDF() {
      html2pdf(document.getElementById('pdf-content'), {
        margin: 1,
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy']
        },
        filename: 'updateChecklist.pdf'
      })
    }
  }
}
</script>
