export default {
  path: '/download',
  meta: {
    hasAuth: 1,
    cType: 0,
    cName: window.i18n.t('saber.menu.downfile.name'),
    icon: 'download'
  },
  component: () => import('@/views/container'),
  name: 'Download',
  redirect: '/download/aLink',
  children: [
    {
      path: '/download/aLink',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.downfile.hyperlink')
      },
      component: () => import('@/views/download/aLink'),
      name: 'ALink'
    },
    {
      path: '/download/form',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.downfile.formRequest')
      },
      component: () => import('@/views/download/form'),
      name: 'Form'
    },
    {
      path: '/download/blob',
      meta: { hasAuth: 1, cType: 2, cName: 'blob' },
      component: () => import('@/views/download/blob'),
      name: 'Blob'
    }
  ]
}
