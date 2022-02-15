import { App } from 'vue'
import { createStore } from 'vuex'

export default {
  install (app: App)
  {
    const store = createStore({
      state: { },
      mutations: { },
      actions: { },
      modules: { },
    })

    app.use(store)
  },
}
