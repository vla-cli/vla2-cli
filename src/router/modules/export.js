export default {
  path: '/export',
  meta: {
    hasAuth: 1,
    cType: 0,
    cName: window.i18n.t('saber.menu.exportfile.name'),
    icon: 'excel'
  },
  component: () => import('@/views/container'),
  name: 'Export',
  redirect: '/export/excel',
  children: [
    {
      path: '/export/excel',
      meta: { hasAuth: 1, cType: 0, cName: 'excel' },
      component: () => import('@/views/container'),
      name: 'Excel',
      redirect: '/export/excel/type',
      children: [
        {
          path: '/export/excel/type',
          meta: {
            hasAuth: 1,
            cType: 2,
            cName: window.i18n.t('saber.menu.exportfile.multiFormat')
          },
          component: () => import('@/views/export/excel'),
          name: 'ExcelType'
        },
        {
          path: '/export/excel/mergeHeader',
          meta: {
            hasAuth: 1,
            cType: 2,
            cName: window.i18n.t('saber.menu.exportfile.headMerge')
          },
          component: () => import('@/views/export/mergeHeader'),
          name: 'MergeHeader'
        }
      ]
    },
    {
      path: '/export/zip',
      meta: { hasAuth: 1, cType: 2, cName: 'zip' },
      component: () => import('@/views/export/zip'),
      name: 'Zip'
    },
    {
      path: '/export/pdf',
      meta: { hasAuth: 1, cType: 2, cName: 'pdf' },
      component: () => import('@/views/export/pdf'),
      name: 'Pdf'
    }
  ]
}
