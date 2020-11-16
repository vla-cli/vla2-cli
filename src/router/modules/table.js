export default {
  path: '/table',
  meta: {
    hasAuth: 1,
    cType: 0,
    cName: window.i18n.t('saber.menu.table.name'),
    icon: 'table'
  },
  component: () => import('@/views/container'),
  name: 'Table',
  redirect: '/table/inlinetable',
  children: [
    {
      path: '/table/inlinetable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.inline')
      },
      component: () => import('@/views/table/inlinetable'),
      name: 'Inlinetable'
    }
  ]
}
