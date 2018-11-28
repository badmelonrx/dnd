import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CharacterView from '@/components/CharacterView'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/characters',
      component: CharacterView,
      children: [
      {
      	path: ':id',
      	component: CharacterView
  		}
      ]
    },
  ]
})
