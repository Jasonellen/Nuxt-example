import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

import left from './modules/left'
import right from './modules/right'

export default ()=>new Vuex.Store({
	modules: {
		left,
		right
	},
	
})

