<template>
  <div class="dashboard">
    {{$i18n.t('saber.menu.dashboard.content')}}
  </div>
</template>

<script>

export default {
  name: 'dashboard'
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 200px;
  text-align: center;
  letter-spacing: 2.8px;
  font-size: 40px;
  color: rgb(64, 201, 198);
  font-weight: bold;
  text-shadow: 0 0 1px currentColor,-1px -1px 1px #030,0 -1px 1px #030,1px -1px 1px #030,1px 0 1px #030,1px 1px 1px #030,0 1px 1px #030,-1px 1px 1px #030,-1px 0 1px #030;
}
</style>
