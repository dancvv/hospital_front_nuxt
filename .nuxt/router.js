import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cabb677 = () => interopDefault(import('../pages/hosp/index.vue' /* webpackChunkName: "pages/hosp/index" */))
const _6d0d67de = () => interopDefault(import('../pages/user/index.vue' /* webpackChunkName: "pages/user/index" */))
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
    path: "/user",
    component: _6d0d67de,
    name: "user"
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
