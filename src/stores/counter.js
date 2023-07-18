import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      phases: [
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
      ],
      counties: [
        {
          id: 1,
          name: 'Anderson',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 2,
          name: 'Bedford',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 3,
          name: 'Benton',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 4,
          name: 'Bledsoe',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 5,
          name: 'Blount',
          east: true,
          phase: 5,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 6,
          name: 'Bradley',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 7,
          name: 'Campbell',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 8,
          name: 'Cannon',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 9,
          name: 'Carroll',
          east: false,
          phase: 1,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 10,
          name: 'Carter',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 11,
          name: 'Cheatham',
          east: false,
          phase: 1,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 12,
          name: 'Chester',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 13,
          name: 'Claiborne',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        {
          id: 14,
          name: 'Clay',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        //cocke
        {
          id: 15,
          name: 'Cocke',
          east: true,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        //coffee
        {
          id: 16,
          name: 'Coffee',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // crockett
        {
          id: 17,
          name: 'Crockett',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // cumberland
        {
          id: 18,
          name: 'Cumberland',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // davidson
        {
          id: 19,
          name: 'Davidson',
          east: false,
          phase: 5,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // decatur
        {
          id: 20,
          name: 'Decatur',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // dekalb
        {
          id: 21,
          name: 'Dekalb',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // dickson
        {
          id: 22,
          name: 'Dickson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // dyer
        {
          id: 23,
          name: 'Dyer',
          east: false,
          phase: 1
        },
        // fayette
        {
          id: 24,
          name: 'Fayette',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // fentress
        {
          id: 25,
          name: 'Fentress',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // franklin
        {
          id: 26,
          name: 'Franklin',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // gibson
        {
          id: 27,
          name: 'Gibson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // giles
        {
          id: 28,
          name: 'Giles',
          east: false,
          phase: 1,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // grainger
        {
          id: 29,
          name: 'Grainger',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // greene
        {
          id: 30,
          name: 'Greene',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // grundy
        {
          id: 31,
          name: 'Grundy',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hamblen
        {
          id: 32,
          name: 'Hamblen',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hamilton
        {
          id: 33,
          name: 'Hamilton',
          east: true,
          phase: 5,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hancock
        {
          id: 34,
          name: 'Hancock',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hardeman
        {
          id: 35,
          name: 'Hardeman',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hardin
        {
          id: 36,
          name: 'Hardin',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hawkins
        {
          id: 37,
          name: 'Hawkins',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // haywood
        {
          id: 38,
          name: 'Haywood',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // henderson
        {
          id: 39,
          name: 'Henderson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // henry
        {
          id: 40,
          name: 'Henry',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // hickman
        {
          id: 41,
          name: 'Hickman',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // houston
        {
          id: 42,
          name: 'Houston',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // humphreys
        {
          id: 43,
          name: 'Humphreys',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // jackson
        {
          id: 44,
          name: 'Jackson',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // jefferson
        {
          id: 45,
          name: 'Jefferson',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // johnson
        {
          id: 46,
          name: 'Johnson',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // knox
        {
          id: 47,
          name: 'Knox',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // lake
        {
          id: 48,
          name: 'Lake',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // lauderdale
        {
          id: 49,
          name: 'Laudedale',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // lawrence
        {
          id: 50,
          name: 'Lawrence',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // lewis
        {
          id: 51,
          name: 'Lewis',
          east: false,
          phase: 1,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // lincoln
        {
          id: 52,
          name: 'Lincoln',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // loudon
        {
          id: 53,
          name: 'Loudon',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // macon
        {
          id: 54,
          name: 'Macon',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // madison
        {
          id: 55,
          name: 'Madison',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // marion
        {
          id: 56,
          name: 'Marion',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // marshall
        {
          id: 57,
          name: 'Marshall',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // maury
        {
          id: 58,
          name: 'Maury',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // mcminn
        {
          id: 59,
          name: 'Mcminn',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // mcnairy
        {
          id: 60,
          name: 'Mcnairy',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // meigs
        {
          id: 61,
          name: 'Meigs',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // monroe
        {
          id: 62,
          name: 'Monroe',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // montgomery
        {
          id: 63,
          name: 'Montgomery',
          east: false,
          phase: 5
        },
        // moore
        {
          id: 64,
          name: 'Moore',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // morgan
        {
          id: 65,
          name: 'Morgan',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // obion
        {
          id: 66,
          name: 'Obion',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // overton
        {
          id: 67,
          name: 'Overton',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // perry
        {
          id: 68,
          name: 'Perry',
          east: false,
          phase: 1,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // pickett
        {
          id: 69,
          name: 'Pickett',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // polk
        {
          id: 70,
          name: 'Polk',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // putnam
        {
          id: 71,
          name: 'Putnam',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // rhea
        {
          id: 72,
          name: 'Rhea',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // roane
        {
          id: 73,
          name: 'Roane',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // robertson
        {
          id: 74,
          name: 'Robertson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // rutherford
        {
          id: 75,
          name: 'Rutherford',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // sctt
        {
          id: 76,
          name: 'Scott',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // sequatchie
        {
          id: 77,
          name: 'Sequatchie',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // sevier
        {
          id: 78,
          name: 'Sevier',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // shelby
        {
          id: 79,
          name: 'Shelby',
          east: false,
          phase: 5,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // smith
        {
          id: 80,
          name: 'Smith',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // stewart
        {
          id: 81,
          name: 'Stewart',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // sullivan
        {
          id: 82,
          name: 'Sullivan',
          east: true,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // sumner
        {
          id: 83,
          name: 'Sumner',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // tipton
        {
          id: 84,
          name: 'Tipton',
          east: false,
          phase: 2,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // trousdale
        {
          id: 85,
          name: 'Trousdale',
          east: false,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // unicoi
        {
          id: 86,
          name: 'Unicoi',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // union
        {
          id: 87,
          name: 'Union',
          east: true,
          phase: 3,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // vaburen
        {
          id: 88,
          name: 'Vanburen',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // warren
        {
          id: 89,
          name: 'Warren',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // wshington
        {
          id: 90,
          name: 'Washington',
          east: true,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // wayne
        {
          id: 91,
          name: 'Wayne',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // weakley
        {
          id: 92,
          name: 'Weakley',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // white
        {
          id: 93,
          name: 'White',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // williamson
        {
          id: 94,
          name: 'Williamson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        },
        // wilson
        {
          id: 95,
          name: 'Wilson',
          east: false,
          phase: 4,
          error: '',
          salt: false,
          sqlPres: false,
          errorPresent: false
        }
      ]
    }
  }
})
