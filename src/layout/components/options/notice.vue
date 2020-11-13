<template>
  <div class="icon-item">
    <el-popover
      placement="bottom-end"
      width="250"
      :visible-arrow="false"
      popper-class="notice-popper"
      trigger="click">
      <dl class="notice-list">
        <dt class="notice-title clearfix">
          <span class="fl">{{$t('saber.common.allert')}}</span>
          <span class="fr">{{number}}</span>
        </dt>
        <dd v-for="(item, index) in allertsData" :key="index">
          <h3>{{item.name}}</h3>
          <p>{{item.content}}</p>
          <span>{{item.time}}</span>
        </dd>
      </dl>
      <div class="notice-all">{{$t('saber.common.viewAll')}}</div>
      <el-badge is-dot slot="reference">
        <i class="el-icon-bell" />
      </el-badge>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data() {
    return {
      allertsData: [
        { name: '有裕', content: '会议通知', time: '2020-03-14 13:00:00' },
        { name: '管理员', content: '项目权限取消', time: '2020-03-12 12:00:00' },
        { name: '西蒙', content: '立项会议通知', time: '2020-03-15 14:00:00' }
      ],
      number: 10
    }
  }
}
</script>

<style lang="scss" scoped>
.el-icon-bell {
  cursor: pointer;
  color: #e3ebf3;
  font-size: $--font-size + 8px;
}
.icon-item {
  /deep/ .el-badge__content.is-dot {
    position: absolute;
    top: 15px;
    right: 5px;
    width: 10px;
    height: 10px;
  }
}
.notice-list {
  .notice-title {
    height: 44px;
    line-height: 44px;
    background-color: #50a3a2;
    color: #fff;
    font-size: $--font-size + 2px;
  }
  dt,
  dd {
    padding: 0 10px;
  }
  dd {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #e6e6e6;
    }
    h3 {
      font-weight: bold;
      font-size: $--font-size + 1px;
      margin-bottom: 5px;
    }
    p {
      line-height: 20px;
    }
    span {
      color: #97a8be;
      font-size: $--font-size - 2px;
    }
  }
}
.notice-all {
  cursor: pointer;
  height: 44px;
  line-height: 44px;
  color: #fff;
  background-color: #40c9c6;
  text-align: center;
  opacity: 0.6;
}
</style>

<style lang="scss">
.notice-popper {
  padding: 0;
}
</style>
