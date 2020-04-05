import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import '@urapywka/vkui-icons'
import '@urapywka/vkui-icons/dist/vkui-icons.css'
import components from '@urapywka/vkui/src/components'
import vuetify from './plugins/vuetify'
import connect from '@vkontakte/vkui-connect'
connect.send('VKWebAppInit')

Vue.use(PortalVue)

Vue.config.productionTip = false

new Vue({
  router,
  components,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
