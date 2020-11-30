import { createApp } from 'vue'
import App from './App.vue'

import Message from "../tm-ui/components/Message"

const app = createApp(App)
app.config.globalProperties.$message = Message;

app.mount('#app')
