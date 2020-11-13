let app = {
  namespaced: true,
  state: {
    isCollapse: false, // 可见范围所选择的数据列表
    time: null, // 全局定时器
    breadcrumbList: [] // 面包屑路由集合
  },
  mutations: {
    setVisibleList(state, data) {
      state.isCollapse = data
    },
    setBreadcrumbList(state, data) {
      state.breadcrumbList = data
    },
    setTime(state, data) {
      state.time = data
    }
  }
}

export default app
