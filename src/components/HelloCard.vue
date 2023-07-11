<template>
  <div class="hello">
    <v-row>
      <v-col align="center">
        <v-card class="elevation-8 card text-white my-5" color="#2f4a66">
          <v-card-text>
            <div class="text-h6 my-5">Current update is...</div>
            <div class="text-h5 my-5">
              <v-icon icon="mdi-check-network"></v-icon>
              {{currentUpdate}}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col align="center">
        <div style="padding-top: 100px;">
          <v-tooltip text="Export to PDF" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn  v-bind="props" size="x-large" class="mx-5" color="black" icon="mdi-export"></v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="Email Support"  location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn  v-bind="props" size="x-large" class="mx-5" color="black" icon="mdi-email"></v-btn>
            </template>
          </v-tooltip>        </div>
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
    currentUpdate:"",
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
        east: true,
        phase: 4
      },
      {
        id: 2,
        name: 'Bedford',
        east: false,
        phase: 3
      },
      {
        id: 3,
        name: 'Benton',
        east: false,
        phase: 4
      },
      {
        id: 4,
        name: 'Bledsoe',
        east: false,
        phase: 3
      },
      {
        id: 5,
        name: 'Blount',
        east: true,
        phase: 5
      },
      {
        id: 6,
        name: 'Bradley',
        east: true,
        phase: 4
      },
      {
        id: 7,
        name: 'Campbell',
        east: true,
        phase: 3
      },
      {
        id: 8,
        name: 'Cannon',
        east: false,
        phase: 3
      },
      {
        id: 9,
        name: 'Carroll',
        east: false,
        phase: 1
      },
      {
        id: 10,
        name: 'Carter',
        east: true,
        phase: 3
      },
      {
        id: 11,
        name: 'Cheatam',
        east: false,
        phase: 1
      },
      {
        id: 12,
        name: 'Chester',
        east: false,
        phase: 2
      },
      {
        id: 13,
        name: 'Claiborne',
        east: true,
        phase: 4
      },
      {
        id: 14,
        name: 'Clay',
        east: false,
        phase: 3
      }
      //cocke15
      ,
      {
        id: 15,
        name: 'Cocke',
        east: true,
        phase: 2
      }
      //coffee
      ,
      {
        id: 16,
        name: 'Coffee',
        east: false,
        phase: 2
      }
      // crockett
      ,
      {
        id: 17,
        name: 'Crockett',
        east: false,
        phase: 4
      }
      // cumberland
      ,
      {
        id: 18,
        name: 'Cumberland',
        east: false,
        phase: 4
      }
      // davidson
      ,
      {
        id: 19,
        name: 'Davidson',
        east: false,
        phase: 5
      }
      // decatur
      ,
      {
        id: 20,
        name: 'Decatur',
        east: false,
        phase: 4
      }
      // dekalb
      ,
      {
        id: 21,
        name: 'Dekalb',
        east: false,
        phase: 2
      }
      // dickson
      ,
      {
        id: 22,
        name: 'Dickson',
        east: false,
        phase: 4
      }
      // dyer
      ,
      {
        id: 23,
        name: 'Dyer',
        east: false,
        phase: 1
      }
      // fayette
      ,
      {
        id: 24,
        name: 'Fayette',
        east: false,
        phase: 4
      }
      // fentress
      ,
      {
        id: 25,
        name: 'Fentress',
        east: false,
        phase: 4
      }
      // franklin
            ,
      {
        id: 26,
        name: 'Franklin',
        east: false,
        phase: 4
      }
      // gibson
            ,
      {
        id: 27,
        name: 'Gibson',
        east: false,
        phase: 4
      }
      // giles
            ,
      {
        id: 28,
        name: 'Giles',
        east: false,
        phase: 4
      }
      // grainger
            ,
      {
        id: 29,
        name: 'Grainger',
        east: true,
        phase: 4
      }
      // greene
            ,
      {
        id: 30,
        name: 'Greene',
        east: true,
        phase: 4
      }
      // grundy
            ,
      {
        id: 31,
        name: 'Grundy',
        east: false,
        phase: 4
      }
      // hamblen
            ,
      {
        id: 32,
        name: 'Hamblen',
        east: true,
        phase: 4
      }
      // hamilton
            ,
      {
        id: 33,
        name: 'Hamilton',
        east: true,
        phase: 4
      }
      // hancock
            ,
      {
        id: 34,
        name: 'Hancock',
        east: true,
        phase: 4
      }
      // hardeman
            ,
      {
        id: 35,
        name: 'Hardeman',
        east: false,
        phase: 4
      }
      // hardin
            ,
      {
        id: 36,
        name: 'Hardin',
        east: false,
        phase: 4
      }
      // hawkins
            ,
      {
        id: 37,
        name: 'Hawkins',
        east: true,
        phase: 4
      }
      // haywood
            ,
      {
        id: 38,
        name: 'Haywood',
        east: false,
        phase: 4
      }
      // henderson
            ,
      {
        id: 39,
        name: 'Henderson',
        east: false,
        phase: 4
      }
      // henry
            ,
      {
        id: 40,
        name: 'Henry',
        east: false,
        phase: 4
      }
      // hickman
            ,
      {
        id: 41,
        name: 'Hickman',
        east: false,
        phase: 4
      }
      // houston
            ,
      {
        id: 42,
        name: 'Houston',
        east: false,
        phase: 4
      }
      // humphreys
            ,
      {
        id: 43,
        name: 'Humphreys',
        east: false,
        phase: 4
      }
      // jackson
            ,
      {
        id: 44,
        name: 'Jackson',
        east: false,
        phase: 4
      }
      // jefferson
            ,
      {
        id: 45,
        name: 'Jefferson',
        east: true,
        phase: 4
      }
      // johnson
            ,
      {
        id: 46,
        name: 'Johnson',
        east: true,
        phase: 4
      }
      // knox
            ,
      {
        id: 47,
        name: 'Knox',
        east: true,
        phase: 4
      }
      // lake
            ,
      {
        id: 48,
        name: 'Lake',
        east: false,
        phase: 4
      }
      // lauderdale
            ,
      {
        id: 49,
        name: 'Laudedale',
        east: false,
        phase: 4
      }
      // lawrence
            ,
      {
        id: 50,
        name: 'Lawrence',
        east: false,
        phase: 4
      }
      // lewis
            ,
      {
        id: 51,
        name: 'Lewis',
        east: false,
        phase: 4
      }
      // lincoln
            ,
      {
        id: 52,
        name: 'Lincoln',
        east: false,
        phase: 4
      }
      // loudon
            ,
      {
        id: 53,
        name: 'Loudon',
        east: true,
        phase: 4
      }
      // macon
            ,
      {
        id: 54,
        name: 'Macon',
        east: false,
        phase: 4
      }
      // madison
            ,
      {
        id: 55,
        name: 'Madison',
        east: false,
        phase: 4
      }
      // marion
            ,
      {
        id: 56,
        name: 'Marion',
        east: false,
        phase: 4
      }
      // marshall
            ,
      {
        id: 57,
        name: 'Marshall',
        east: false,
        phase: 4
      }
      // maury
            ,
      {
        id: 58,
        name: 'Maury',
        east: false,
        phase: 4
      }
      // mcminn
            ,
      {
        id: 59,
        name: 'Mcminn',
        east: true,
        phase: 4
      }
      // mcnairy
            ,
      {
        id: 60,
        name: 'Mcnairy',
        east: false,
        phase: 4
      }
      // meigs
            ,
      {
        id: 61,
        name: 'Meigs',
        east: true,
        phase: 4
      }
      // monroe
            ,
      {
        id: 62,
        name: 'Monroe',
        east: true,
        phase: 4
      }
      // montgomery
            ,
      {
        id: 63,
        name: 'Montgomery',
        east: false,
        phase: 4
      }
      // moore
            ,
      {
        id: 64,
        name: 'Moore',
        east: false,
        phase: 4
      }
      // morgan
            ,
      {
        id: 65,
        name: 'Morgan',
        east: true,
        phase: 4
      }
      // obion
            ,
      {
        id: 66,
        name: 'Obion',
        east: false,
        phase: 4
      }
      // overton
            ,
      {
        id: 67,
        name: 'Overton',
        east: false,
        phase: 4
      }
      // perry
            ,
      {
        id: 68,
        name: 'Perry',
        east: false,
        phase: 4
      }
      // pickett
            ,
      {
        id: 69,
        name: 'Pickett',
        east: false,
        phase: 4
      }
      // polk
            ,
      {
        id: 70,
        name: 'Polk',
        east: true,
        phase: 4
      }
      // putnam
            ,
      {
        id: 71,
        name: 'Putnam',
        east: false,
        phase: 4
      }
      // rhea
            ,
      {
        id: 72,
        name: 'Rhea',
        east: true,
        phase: 4
      }
      // roane
            ,
      {
        id: 73,
        name: 'Roane',
        east: true,
        phase: 4
      }
      // robertson
            ,
      {
        id: 74,
        name: 'Robertson',
        east: false,
        phase: 4
      }
      // rutherford
            ,
      {
        id: 75,
        name: 'Rutherford',
        east: false,
        phase: 4
      }
      // sctt
            ,
      {
        id: 76,
        name: 'Scott',
        east: true,
        phase: 4
      }
      // sequatchie
            ,
      {
        id: 77,
        name: 'Sequatchie',
        east: false,
        phase: 4
      }
      // seviewr
            ,
      {
        id: 78,
        name: 'Sevier',
        east: true,
        phase: 4
      }
      // shelby
            ,
      {
        id: 79,
        name: 'Shelby',
        east: false,
        phase: 4
      }
      // smith
            ,
      {
        id: 80,
        name: 'Smith',
        east: false,
        phase: 4
      }
      // stewart
            ,
      {
        id: 81,
        name: 'Stewart',
        east: false,
        phase: 4
      } 
      // sullivan
            ,
      {
        id: 82,
        name: 'Sullivan',
        east: true,
        phase: 4
      }
      // sumner
            ,
      {
        id: 83,
        name: 'Sumner',
        east: false,
        phase: 4
      }
      // tipton
            ,
      {
        id: 84,
        name: 'Tipton',
        east: false,
        phase: 4
      }
      // trousdale
            ,
      {
        id: 85,
        name: 'Trousdale',
        east: false,
        phase: 4
      }
      // unicoi
            ,
      {
        id: 86,
        name: 'Unicoi',
        east: true,
        phase: 4
      }
      // union
            ,
      {
        id: 87,
        name: 'Union',
        east: true,
        phase: 4
      }
      // vaburen
            ,
      {
        id: 88,
        name: 'Vanburen',
        east: false,
        phase: 4
      }
      // warren
            ,
      {
        id: 89,
        name: 'Warren',
        east: false,
        phase: 4
      }
      // wshington
            ,
      {
        id: 90,
        name: 'Washington',
        east: true,
        phase: 4
      }
      // wayne
            ,
      {
        id: 91,
        name: 'Wayne',
        east: false,
        phase: 4
      }
      // weakley
            ,
      {
        id: 92,
        name: 'Weakley',
        east: false,
        phase: 4
      }
      // white
            ,
      {
        id: 93,
        name: 'White',
        east: false,
        phase: 4
      }
      // williamson
            ,
      {
        id: 94,
        name: 'Williamson',
        east: false,
        phase: 4
      }
      // wilson 
            ,
      {
        id: 95,
        name: 'Wilson',
        east: false,
        phase: 4
      }
    ],
  }),
  mounted(){
    this.getDate();
  },
  methods:{
    filters(phaseNum){
      return this.counties.filter(county=>county.phase===phaseNum);
    },
    getDate(){
      var currentMonth = new Date();
      console.log(currentMonth);
      if(currentMonth.getMonth>9){
        this.currentUpdate = "23" + (currentMonth.getMonth()+1);
      }
      else{
        this.currentUpdate = "230" + (currentMonth.getMonth()+1)
      }
    }
  }

}
</script>
