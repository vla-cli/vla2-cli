<template>
  <searchForm
    :formData="form"
    :componentsData="componentsData"
    label-width="80px"
    ref="searchForm"
  >
    <el-button @click="reset">重置</el-button>
  </searchForm>
</template>

<script>
import searchForm from '@/components/searchForm'
export default {
  data() {
    return {
      form: {
        inputVal: '',
        selectVal: '',
        cascaderVal: '',
        timeVal: '',
        textareaVal: ''
      },
      componentsData: [
        {
          formItemProps: { label: '输入框：', prop: 'inputVal' },
          type: 'TextInput',
          modelVal: 'inputVal',
          inputProps: { placeholder: '请输入' }
        },
        {
          formItemProps: { label: '搜索框：', prop: 'selectVal' },
          type: 'Select',
          modelVal: 'selectVal',
          list: [
            { label: '区域一', value: '1', key: 1 },
            { label: '区域二', value: '2', key: 2 }
          ],
          inputProps: { placeholder: '请选择', clearable: true }
        },
        {
          formItemProps: { label: '级联：', prop: 'cascaderVal' },
          type: 'Cascader',
          modelVal: 'cascaderVal',
          list: [
            {
              value: 'zhinan',
              label: '指南',
              children: [
                {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [
                    {
                      value: 'yizhi',
                      label: '一致'
                    },
                    {
                      value: 'fankui',
                      label: '反馈'
                    },
                    {
                      value: 'xiaolv',
                      label: '效率'
                    },
                    {
                      value: 'kekong',
                      label: '可控'
                    }
                  ]
                }
              ]
            }
          ],
          defaultProps: {},
          inputProps: { placeholder: '请选择', clearable: true }
        },
        {
          formItemProps: { label: '时间：', prop: 'timeVal' },
          type: 'DatePicker',
          modelVal: 'timeVal',
          inputProps: { placeholder: '选择日期', type: 'date' }
        },
        {
          formItemProps: { label: '文本域：', prop: 'textareaVal' },
          type: 'Textarea',
          modelVal: 'textareaVal',
          inputProps: { placeholder: '请输入', autosize: { minRows: 2, maxRows: 4 } }
        }
      ]
    }
  },
  components: { searchForm },
  methods: {
    reset() {
      this.$refs.searchForm.getForm().resetFields()
    }
  }
}
</script>
