<template>
  <div class="share">
    <el-button @click="shareToQQ">{{
      $i18n.t('saber.menu.share.qq')
    }}</el-button>
    <el-button @click="shareToRoom">{{
      $i18n.t('saber.menu.share.qqzone')
    }}</el-button>
    <el-button @click="shareToMicroblog">{{
      $i18n.t('saber.menu.share.weibo')
    }}</el-button>
    <el-button @click="shareToTieBa">{{
      $i18n.t('saber.menu.share.tieba')
    }}</el-button>
    <el-button @click="shareToDouBan">{{
      $i18n.t('saber.menu.share.douban')
    }}</el-button>
    <el-button @click="shareToWechat">{{
      $i18n.t('saber.menu.share.wechat')
    }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'share',
  data() {
    return {
      showWeCode: false
    }
  },
  methods: {
    // 分享到QQ好友(PC端可用)
    shareToQQ() {
      // 此处分享链接内无法携带图片
      const share = {
        title: 'vuecli2webpack3',
        desc: 'vue后台管理系统常用功能小结',
        share_url: 'http://localhost:8080/share'
      }
      window.open(
        'https://connect.qq.com/widget/shareqq/index.html?url=' +
          encodeURIComponent(share.share_url) +
          '&title=' +
          share.title +
          '&desc=' +
          share.desc
      )
    },
    // 分享到QQ空间(可用)
    shareToRoom() {
      let _shareUrl =
        'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?'
      _shareUrl += 'url=' + encodeURIComponent(document.location) // 参数url设置分享的内容链接|默认当前页location
      _shareUrl += '&showcount=' + 1 // 参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
      _shareUrl += '&desc=' + encodeURIComponent('分享的描述') // 参数desc设置分享的描述，可选参数
      _shareUrl += '&summary=' + encodeURIComponent('分享摘要') // 参数summary设置分享摘要，可选参数
      _shareUrl += '&title=' + encodeURIComponent(document.title) // 参数title设置分享标题，可选参数
      _shareUrl += '&site=' + encodeURIComponent('') // 参数site设置分享来源，可选参数
      // 跳转地址
      window.open(_shareUrl, '_blank')
    },
    // 分享到微博(可用)
    shareToMicroblog() {
      // 自定义内容
      const share = {
        title: 'vuecli2webpack3',
        image_url: ['https://xxx.jpeg'],
        share_url: 'vue后台管理系统常用功能小结'
      }
      // 跳转地址
      window.open(
        'https://service.weibo.com/share/share.php?url=' +
          encodeURIComponent(share.share_url) +
          '&title=' +
          share.title +
          '&pic=' +
          share.image_url +
          '&searchPic=true',
        '_blank'
      )
    },
    // 分享到贴吧
    shareToTieBa() {
      let _shareUrl = 'http://tieba.baidu.com/f/commit/share/openShareApi?'
      _shareUrl += 'title=' + encodeURIComponent(document.title) // 分享的标题
      _shareUrl += '&url=' + encodeURIComponent(document.location) // 分享的链接
      _shareUrl += '&pic=' + encodeURIComponent('') // 分享的图片
      window.open(_shareUrl, '_blank')
    },
    // 分享到豆瓣
    shareToDouBan() {
      let _shareUrl = 'http://shuo.douban.com/!service/share?'
      _shareUrl += 'href=' + encodeURIComponent(location.href) // 分享的链接
      _shareUrl += '&name=' + encodeURIComponent(document.title) // 分享的标题
      _shareUrl += '&image=' + encodeURIComponent('') // 分享的图片
      window.open(_shareUrl, '_blank')
    },
    // 分享微信需要生产二维码
    shareToWechat() {
      this.showWeCode = !this.showWeCode
    }
  }
}
</script>
