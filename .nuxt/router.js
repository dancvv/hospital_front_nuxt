import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cabb677 = () => interopDefault(import('../pages/hosp/index.vue' /* webpackChunkName: "pages/hosp/index" */))
const _5c616531 = () => interopDefault(import('../pages/order/index.vue' /* webpackChunkName: "pages/order/index" */))
const _1cb0de28 = () => interopDefault(import('../pages/patient/index.vue' /* webpackChunkName: "pages/patient/index" */))
const _6d0d67de = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
const _039dab3e = () => interopDefault(import('../pages/hosp/booking.vue' /* webpackChunkName: "pages/hosp/booking" */))
const _46e2f682 = () => interopDefault(import('../pages/hosp/schedule.vue' /* webpackChunkName: "pages/hosp/schedule" */))
const _407ce124 = () => interopDefault(import('../pages/order/show.vue' /* webpackChunkName: "pages/order/show" */))
const _78f485f7 = () => interopDefault(import('../pages/patient/add.vue' /* webpackChunkName: "pages/patient/add" */))
const _4498c8d2 = () => interopDefault(import('../pages/patient/show.vue' /* webpackChunkName: "pages/patient/show" */))
const _48222332 = () => interopDefault(import('../pages/weixin/callback.vue' /* webpackChunkName: "pages/weixin/callback" */))
const _0e2fd546 = () => interopDefault(import('../pages/hosp/detail/_hoscode.vue' /* webpackChunkName: "pages/hosp/detail/_hoscode" */))
const _739caa36 = () => interopDefault(import('../pages/hosp/notice/_hoscode.vue' /* webpackChunkName: "pages/hosp/notice/_hoscode" */))
const _a7674536 = () => interopDefault(import('../pages/hosp/_hoscode.vue' /* webpackChunkName: "pages/hosp/_hoscode" */))
const _046b8e9c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/hosp",
    component: _7cabb677,
    name: "hosp"
  }, {
    path: "/order",
    component: _5c616531,
    name: "order"
  }, {
    path: "/patient",
    component: _1cb0de28,
    name: "patient"
  }, {
    path: "/user",
    component: _6d0d67de,
    name: "user"
  }, {
    path: "/hosp/booking",
    component: _039dab3e,
    name: "hosp-booking"
  }, {
    path: "/hosp/schedule",
    component: _46e2f682,
    name: "hosp-schedule"
  }, {
    path: "/order/show",
    component: _407ce124,
    name: "order-show"
  }, {
    path: "/patient/add",
    component: _78f485f7,
    name: "patient-add"
  }, {
    path: "/patient/show",
    component: _4498c8d2,
    name: "patient-show"
  }, {
    path: "/weixin/callback",
    component: _48222332,
    name: "weixin-callback"
  }, {
    path: "/hosp/detail/:hoscode?",
    component: _0e2fd546,
    name: "hosp-detail-hoscode"
  }, {
    path: "/hosp/notice/:hoscode?",
    component: _739caa36,
    name: "hosp-notice-hoscode"
  }, {
    path: "/hosp/:hoscode",
    component: _a7674536,
    name: "hosp-hoscode"
  }, {
    path: "/",
    component: _046b8e9c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
