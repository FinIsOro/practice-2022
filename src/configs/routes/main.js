export default [
  {
    path: '/',
    name: 'default',
    meta: { auth: true },
  },
  {
    path: '/404',
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]
