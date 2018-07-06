import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Actions from '@/components/Actions'
import MessageToggle from '@/components/MessageToggle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/actions',
      name: 'actions',
      component: Actions
    }, {
      path: '/message_toggle',
      name: 'message_toggle',
      component: MessageToggle
    }
  ]
})
