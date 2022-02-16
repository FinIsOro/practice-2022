export default [
  {
    path: '/',
    name: 'default',
    component: () => import('@/views/chats/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/utility/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]
