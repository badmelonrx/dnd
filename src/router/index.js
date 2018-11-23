import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import CharacterList from '@/components/CharacterList'
import HelloWorld from '@/components/HelloWorld'
import CharacterView from '@/components/CharacterView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
	   	path: '/', 
	    component: CharacterList
	},
    {
    	path: '/character/:id', 
    	component: CharacterView,
    	name: 'character'}
    ]
})
