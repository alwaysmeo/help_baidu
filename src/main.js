import '@assets/styles/base.scss'

import { createApp } from 'vue'
import routes from '@routes'
import App from './app.vue'

const app = createApp(App)

app.use(routes)

app.mount('#app')
