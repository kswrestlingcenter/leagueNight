import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router/router.js'

const app = createApp(App)

//auto-import base components, exposing them as global components
// const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName)

//   const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))

//   app.component(componentName, componentConfig.default || componentConfig)
// })

app.use(router)

app.mount('#app')
