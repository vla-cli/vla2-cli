export default {
  path: '/component',
  meta: {
    hasAuth: 1,
    cType: 0,
    cName: window.i18n.t('saber.menu.components.name'),
    icon: 'component'
  },
  component: () => import('@/views/container'),
  redirect: '/component/tinymce',
  name: 'Component',
  children: [
    {
      path: '/component/tinymce',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.editor')
      },
      component: () => import('@/views/component/tinymce'),
      name: 'Tinymce'
    },
    {
      path: '/component/backtop',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.backToTop')
      },
      component: () => import('@/views/component/backtop'),
      name: 'Backtop'
    },
    {
      path: '/component/calendar',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.calendar')
      },
      // component: () => import('@/views/container'),
      component: () => import('@/views/component/fullcalendar'),
      name: 'Calendar'
      // redirect: '/component/calendar/fullcalendar',
      // children: [
      //   {
      //     path: '/component/calendar/fullcalendar',
      //     meta: { hasAuth: 1, cType: 2, cName: 'fullcalendar' },
      //     component: () => import('@/views/component/fullcalendar'),
      //     name: 'Fullcalendar'
      //   },
      //   {
      //     path: '/component/calendar/tuiCalendar',
      //     meta: { hasAuth: 1, cType: 2, cName: 'tuiCalendar' },
      //     component: () => import('@/views/component/tuiCalendar'),
      //     name: 'TuiCalendar'
      //   }
      // ]
    },
    {
      path: '/component/expression',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.expression')
      },
      component: () => import('@/views/component/expression'),
      name: 'Expression'
    },
    {
      path: '/component/flowchart',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.flowChart')
      },
      component: () => import('@/views/component/flowchart/index'),
      name: 'Flowchart'
    },
    {
      path: '/component/crop',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.upload')
      },
      component: () => import('@/views/component/crop'),
      name: 'Crop'
    },
    {
      path: '/component/drag',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.drag')
      },
      component: () => import('@/views/component/drag'),
      name: 'Drag'
    },
    {
      path: '/component/copy',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.copy')
      },
      component: () => import('@/views/component/copy'),
      name: 'Copy'
    },
    {
      path: '/component/slide',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.slide')
      },
      component: () => import('@/views/component/slide'),
      name: 'Slide'
    },
    {
      path: '/component/searchForm',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.searchForm')
      },
      component: () => import('@/views/component/searchForm'),
      name: 'SearchForm'
    },
    {
      path: '/component/tablePagination',
      meta: {
        hasAuth: 1,
        cType: 2,
        cName: window.i18n.t('saber.menu.components.tablePagination')
      },
      component: () => import('@/views/component/tablePagination'),
      name: 'TablePagination'
    }
  ]
}
