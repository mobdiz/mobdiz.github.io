import {createApp} from 'vue'

import App from './App.vue'

import './assets/main.css'

import CustomElementUiPlugin from './plugins/element-ui'

const app = createApp(App)

app.use(CustomElementUiPlugin)

app.mount('#app')
