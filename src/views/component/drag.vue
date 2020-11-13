<template>
  <div class="drag page-container p-20 clearfix">
    <draggable class="fl" v-model="list" :group="{name: 'article', pull: 'clone', put: false}" :options = "{ sort: false }">
      <div v-for="element in list" :key="element.text" class="drag-item">
          {{element.text}}
      </div>
    </draggable>
    <draggable class="fr" v-model="data" group="article" :options = "{ animation: 500 }">
      <transition-group>
          <div v-for="(element, index) in data" :key="index + 1" class="drag-item clearfix">
              {{element.text}}<i class="el-icon-circle-close fr m-r-20 m-t-10" :style="{cursor: 'pointer'}" @click="del(index)" />
          </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'drag',
  data() {
    return {
      list: [
        { text: 'Aquamarine' },
        { text: 'Hotpink' },
        { text: 'Gold' },
        { text: 'Crimson' },
        { text: 'Blueviolet' },
        { text: 'Lightblue' },
        { text: 'Cornflowerblue' },
        { text: 'Skyblue' },
        { text: 'Burlywood' }
      ],
      data: [
        { text: 'javascript' },
        { text: 'vue' },
        { text: 'html' },
        { text: 'css' }
      ]
    }
  },
  components: { draggable },
  mounted() {
    // 为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
    document.body.ondrop = function(event) {
      event.preventDefault()
      event.stopPropagation()
    }
  },
  methods:{
    del(index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-item{
    width: 400px;
    height: 40px;
    line-height: 40px;
    position: relative;
    background: #ddd;
    margin-top:20px;
    text-align: center;
}

.drag {
  min-height: calc(100vh - 70px);
}
</style>
