import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import router from './router'
import axios from 'axios'

library.add(fas, far)

axios.defaults.baseURL = 'http://localhost:8000'
const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
