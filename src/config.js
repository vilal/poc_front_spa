import Vue from "vue"

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCurrencyFilter from 'vue-currency-filter'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueProgressiveImage from 'vue-progressive-image'


Vue.use(BootstrapVue)
Vue.use(VueCurrencyFilter)
Vue.use(VueProgressiveImage)

library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
