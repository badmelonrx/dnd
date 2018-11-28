import Vuex from 'vuex'
import Vue from 'vue'
import Chars from './CharService'
Vue.use(Vuex);

let list = ['Kianna Johnson', 'Teek Wildflower']

const store = new Vuex.Store({
	state:{
			characters: list,
			charInfo: "default"
	},
	mutations: {
			async getCharacterList(){
				var response = await Chars.getCharacterList()
				this.state.characters = response.data;
			},
			async getNewChar(state, param){
				var response =  await Chars.getCharacterInfo(param);
				this.state.charInfo = response.data;
			}
	}

})

export default store