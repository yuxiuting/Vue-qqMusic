import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import header from '@/components/header.vue'
import club from '@/components/club.vue'
import finding from '@/components/finding.vue'
import avatar from '@/components/avatar.vue'
import search from '@/components/search.vue'
import total from '@/components/total.vue'
import musiclist from '@/components/musiclist.vue'
import like from '@/components/like.vue'
import play from '@/components/play.vue'
import download from '@/components/download.vue'
Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      component: header
    },
        {
      path:'/club',
      component: club
    },
    {
      path:'/finding',
      component: finding
    },
    {
      path: '/avatar',
      component: avatar
    },
    {   
      path: '/search',
      component: search
    },
    {
      path: '/total',
      component: total
    },
    {
      path: '/musiclist',
      component: musiclist
    },
    {
        path: '/like',
        component: like
    },
    {
        path: '/play',
        component: play
    },
    {
        path: '/download',
        component: download
    }
  ]
})
