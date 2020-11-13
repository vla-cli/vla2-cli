<template>
  <div class="calendar page-container p-20">
    <full-calendar
      v-loading="loading"
      :events="events"
      :config="config">
    </full-calendar>
    <addEvent ref="addevent" :title="dialogTitle" :form="eventForm" @handleSuccess="handleSuccess" />
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import moment from 'moment'
import 'fullcalendar/dist/fullcalendar.css'
import addEvent from './addEvent'

export default {
  name: 'calendar',
  data() {
    return {
      events:[
        { title : '刘备', start : '2020-07-12 10:20', end : '2020-07-12 11:00', id: '1', color: '#333' }
      ],
      config: {
        firstDay: 1, // 一周的第一天从周一开始
        locale:'zh-cn',
        defaultView: 'month', // 默认视图显示月
        header:{
          left: 'prev,next today',
          center: 'title',
          right: 'month'
        },
        /* agenda 模式 */
        allDaySlot: true, // 周，日视图中是否显示全天
        allDayText: '全天',
        timeFormat: 'H:mm',
        axisFormat: 'H:mm',
        editable: false,
        eventLimit: true, // 数据条数太多时，限制各自里显示的数据条数（多余的以“+2more”格式显示）
        slotEventOverlap : false, // 相同时间段的多个日程视觉上是否允许重叠
        eventLimitText : '更多',
        lazyFetching : true, // 是否启用懒加载技术--即只取当前条件下的视图数据，其它数据在切换时触发，默认true只取当前视图的，false是取全视图的
        /* 设置按钮文字 */
        buttonText:{
          today:'今天',
          month: '月'
        },
        dayClick: this.dayClick,
        eventClick: this.eventClick
      },
      eventForm: {
        id: '',
        title: '',
        start: '',
        end: '',
        time: [],
        color: '',
        content: ''
      }, // 弹窗值
      dialogTitle: '新增',
      loading: false
    }
  },
  components: { FullCalendar, addEvent },
  methods: {
    dayClick(date, jsEvent, view) {
      // 新增
      this.dialogTitle = '新增'
      this.$refs.addevent.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.addevent.reset()
        const day = moment(date).format('YYYY-MM-DD')
        this.eventForm.start = day + ' ' + '08:30:00'
        this.eventForm.end = day + ' ' + '17:30:00'
        this.eventForm.time = [this.eventForm.start, this.eventForm.end]
      })
    },
    // 事件点击
    eventClick(calEvent, jsEvent, view) {
      // 编辑
      this.dialogTitle = '编辑'
      this.$refs.addevent.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.addevent.reset()
        this.eventForm.title = calEvent.title
        this.eventForm.start = moment(calEvent.start).format('YYYY-MM-DD HH:mm:ss')
        this.eventForm.end = moment(calEvent.end).format('YYYY-MM-DD HH:mm:ss')
        this.eventForm.time = [this.eventForm.start, this.eventForm.end]
        this.eventForm.color = calEvent.color
        this.eventForm.content = calEvent.content
        this.eventForm.id = calEvent.id
      })
    },
    // 确定
    handleSuccess(item, flag) {
      if (flag) {
        this.events.push(item)
      } else {
        this.events.forEach(val => {
          if (val.id === item.id) {
            Object.assign(val, item)
          }
        })
      }
    }
  }
}
</script>
