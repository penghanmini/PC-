import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config'
import commonStore from './commonStore/commonStore'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    uploadServer: config.default.siteInfo.sites.file_server_url_file,
    updownServer: config.default.siteInfo.sites.file_server_url_api,
    permission: {},
  },

  modules:{
    commonStore,
  },
  actions:{},
  mutations:{},
});

export default store
