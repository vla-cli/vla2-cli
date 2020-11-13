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
  redirect: '/table/dragtable',
  children: [
    {
      path: '/table/dragtable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.drag')
      },
      component: () => import('@/views/table/dragtable'),
      name: 'Dragtable'
    },
    {
      path: '/table/inlinetable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.inline')
      },
      component: () => import('@/views/table/inlinetable'),
      name: 'Inlinetable'
    },
    {
      path: '/table/complextable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.complex')
      },
      component: () => import('@/views/table/complextable'),
      name: 'Complextable'
    },
    {
      path: '/table/mergetable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.merge')
      },
      component: () => import('@/views/table/mergetable'),
      name: 'Mergetable'
    },
    {
      path: '/table/asyntable',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.table.async')
      },
      component: () => import('@/views/table/asyntable'),
      name: 'Asyntable'
    }
  ]
}
