<template>
  <div class="tinymce page-container" v-loading="loading">
    <Editor
      v-model="editorVal"
      api-key="wvutg0mhmqx2p31zruj5cys6bhekokfv3q7lp5zv4vblmrb1"
      initialValue="<p>Initial editor content</p>"
      :init="{
        height: 500,
        menubar: false,
        language: 'zh_CN',
        plugins: [
          'advlist autolink lists link image imagetools charmap emoticons',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table'
        ],
        images_upload_handler: (blobInfo, success, failure) => {
          const img = 'data:image/jpeg;base64,' + blobInfo.base64()
          success(img)
        },
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | \
          lists image media table emoticons print preview forecolor backcolor'
      }"
    />
    <div class="p-20">{{ editorVal }}</div>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import { mapGetters } from 'vuex'

export default {
  name: 'tinymce',
  data() {
    return {
      editorVal: '<p>Initial editor content</p>',
      loading: true
    }
  },
  computed: {
    ...mapGetters(['time'])
  },
  components: {
    Editor
  },
  mounted() {
    const time = setTimeout(() => {
      this.loading = false
    }, 2500)
    this.$store.commit('app/setTime', time)
  }
}
</script>
