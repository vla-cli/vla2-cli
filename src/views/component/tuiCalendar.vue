<template>
  <div class="tuiCalendar page-container p-20">
    <calendar style="height: 800px;"
      :calendars="calendarList"
      :schedules="scheduleList"
      :view="view"
      :taskView="taskView"
      :scheduleView="scheduleView"
      :week="week"
      :month="month"
      :disableDblClick="disableDblClick"
      :isReadOnly="isReadOnly"
      :template="template"
      :useCreationPopup="useCreationPopup"
      :useDetailPopup="useDetailPopup"
    />
  </div>
</template>

<script>
import 'tui-calendar/dist/tui-calendar.css'
import { Calendar } from '@toast-ui/vue-calendar'
import 'tui-date-picker/dist/tui-date-picker.css'
import 'tui-time-picker/dist/tui-time-picker.css'
import moment from 'moment'

export default {
  name: 'tuiCalendar',
  data() {
    return {
      calendarList: [
        {
          id: '0',
          name: 'home'
        },
        {
          id: '1',
          name: 'office'
        }
      ],
      scheduleList: [
        {
          id: '1',
          calendarId: '1',
          title: 'my schedule',
          category: 'time',
          dueDateClass: '',
          start: '2020-05-08T22:30:00+09:00',
          end: '2020-05-08T02:30:00+09:00'
        },
        {
          id: '2',
          calendarId: '2',
          title: 'second schedule',
          category: 'time',
          dueDateClass: '',
          start: '2020-05-09T17:30:00+09:00',
          end: '2020-05-10T17:31:00+09:00'
        }
      ],
      view: 'month',
      taskView: true,
      scheduleView: ['time'],
      week: {
        narrowWeekend: true,
        showTimezoneCollapseButton: true,
        timezonesCollapsed: false
      },
      month: {
        visibleWeeksCount: 6,
        startDayOfWeek: 1
      },
      disableDblClick: true,
      isReadOnly: false,
      template: {
        popupIsAllDay: function() {
          return 'All Day'
        },
        popupStateFree: function() {
          return 'Free'
        },
        popupStateBusy: function() {
          return 'Busy'
        },
        titlePlaceholder: function() {
          return 'Subject'
        },
        locationPlaceholder: function() {
          return 'Location'
        },
        startDatePlaceholder: function() {
          return 'Start date'
        },
        endDatePlaceholder: function() {
          return 'End date'
        },
        popupSave: function() {
          return 'Save'
        },
        popupUpdate: function() {
          return 'Update'
        },
        popupDetailDate: function(isAllDay, start, end) {
          var isSameDate = moment(start).isSame(end)
          var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a'

          if (isAllDay) {
            return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'))
          }

          return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat))
        },
        popupDetailLocation: function(schedule) {
          return 'Location : ' + schedule.location
        },
        popupDetailUser: function(schedule) {
          return 'User : ' + (schedule.attendees || []).join(', ')
        },
        popupDetailState: function(schedule) {
          return 'State : ' + schedule.state || 'Busy'
        },
        popupDetailRepeat: function(schedule) {
          return 'Repeat : ' + schedule.recurrenceRule
        },
        popupDetailBody: function(schedule) {
          return 'Body : ' + schedule.body
        },
        popupEdit: function() {
          return 'Edit'
        },
        popupDelete: function() {
          return 'Delete'
        }
      },
      useCreationPopup: true,
      useDetailPopup: true
    }
  },
  components:{ Calendar }
}
</script>
