import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })


import 'material-design-icons-iconfont/dist/material-design-icons.css'
createApp(App).use(router).use(vuetify).mount('#app')
