<template>
  <div class="icon-item search">
   <svg-icon iconClass="search" @click.native="handleClick" />
    <el-autocomplete
      :class="isSearch"
      v-model="page"
      :placeholder="$t('saber.common.search')"
      :fetch-suggestions="querySearch"
      @select="handleSelect"
      :trigger-on-focus="false" />
  </div>
</template>

<script>
export default {
  name: 'searchPage',
  data() {
    return {
      page: '',
      restaurants: [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
        { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
        { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
        { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
        { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' }
      ],
      isSearch: 'slide-right'
    }
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleClick() {
      this.isSearch = this.isSearch === 'slide-left' ? 'slide-right' : 'slide-left'
    },
    handleSelect(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  /deep/ .el-autocomplete {
    transition: width .3s ease-in-out;
  }
  /deep/ .el-input__inner {
    padding: 0;
    border: 0;
  }
}

.slide-left {
  width: 210px;
  margin-left: 10px;
  /deep/ .el-input__inner {
    padding: 10px;
  }
}

.slide-right {
  width: 0px;
  margin-left: 0;
  /deep/ .el-input__inner {
    padding: 0;
  }
}

</style>
