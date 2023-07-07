import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createAuth0 } from '@auth0/auth0-vue'

const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)

app.use(
  createAuth0({
    domain: 'dev-2zmlnflkzoeuspv2.us.auth0.com',
    clientId: '6unD3cec4CTxL1EwgUSdVPOpmxVetHXG',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
