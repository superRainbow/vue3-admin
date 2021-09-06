<template>
  <el-input :name="setting.name"
            :placeholder="setting.placeholder"
            suffix-icon="el-icon-date"
            :autocomplete="setting.autocomplete"
            :disabled="setting.disable"
            :class="{error:errorStyle}"
            v-model="value"
            @input="onInput"
            @focus="onFocus">
  </el-input>
  <template v-if="datepicker.show">
    <div class="mask"
         @click="close"></div>
    <div class="pickerFrame"
         :class="{ pickerFrameUp: needMoveToUp }">
      <div class="picker">
        <div class="header">
          <el-button icon="el-icon-arrow-left"
                     type="text"
                     @click="handleMonth('prev')"></el-button>
          <el-select v-model="datepicker.year"
                     size="mini"
                     placeholder="請選擇">
            <el-option v-for="(val, i) in datepicker.years"
                       :key="i"
                       :label="setting.isTwType ? `民國 ${getTwYear(val)} 年` : val"
                       :value="val">
            </el-option>
          </el-select>
          <el-select v-model="datepicker.month"
                     size="mini"
                     placeholder="請選擇">
            <el-option v-for="(n, i) in datepicker.monthList"
                       :key="i"
                       :label="`${setting.locale.months[n - 1]} 月`"
                       :value="n">
            </el-option>
          </el-select>
          <el-button icon="el-icon-arrow-right"
                     type="text"
                     @click="handleMonth('next')"></el-button>
        </div>
        <div class="calendar">
          <ul class="title">
            <li v-for="(val, i) in setting.locale.weekday"
                :key="i"
                :class="{
                  weekend:
                    setting.locale.startsWeeks === 0 ||
                    setting.locale.startsWeeks < 0 ||
                    setting.locale.startsWeeks > 6
                      ? i === 0 || i === 6
                      : i === 6 - setting.locale.startsWeeks ||
                        i === 7 - setting.locale.startsWeeks,
                }">
              {{ val }}
            </li>
          </ul>
          <div class="content">
            <ul v-for="(row, i) in datepicker.days"
                :key="i">
              <li v-for="(val, j) in row"
                  :key="j"
                  class="day"
                  :class="{
                            'outfocus': val.month !== datepicker.month,
                            'infocus': val.month === datepicker.month,
                            'today': val.isToday,
                            'disabled': val.isDisabled,
                            'selected highlighted': value === val.viewDateString,
                          }"
                  @click="val.isDisabled ? false : select(val.resultDateString)">{{ val.day }}</li>
            </ul>
          </div>
        </div>
        <ul class="footer"
            v-if="setting.showButton">
          <el-button @click="selectToday">{{ setting.locale.todayBtn }}</el-button>
          <el-button @click="clear">{{ setting.locale.clearBtn }}</el-button>
        </ul>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue';
import _ from 'lodash';
import dayjs from 'dayjs';
import { FormatSettingObject, DateBlock, ComponentSetting } from '@/components/DatePickerTaiwan/interface';
import { settingDefault, yyyymmddRegexp, twRegexp } from '@/components/DatePickerTaiwan/const';
import { getTwYear, formatDate, yyyymmddFormat } from '@/components/DatePickerTaiwan/fn';

export default defineComponent({
  name: 'date-picker-taiwan',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    config: {
      type: Object as () => ComponentSetting,
      default: settingDefault,
    },
  },
  setup(props, { emit }) {
    const setting: ComponentSetting = Object.assign(_.cloneDeep(settingDefault), props.config);
    const formatSetting: FormatSettingObject = reactive({
      format: setting.locale.format,
      formatRegexp: new RegExp('([0-9]{4})([^ a-zA-Z])([0-9]{2})([^ a-zA-Z])([0-9]{2})'),
      yearIndex: 1,
      monthIndex: 3,
      dateIndex: 5,
    });

    const selectedValue = ref(formatDate(props.modelValue, setting.isTwType, setting.locale.format));
    const needMoveToUp = ref(false);
    const errorStyle = ref(false);

    const datepicker = reactive({
      show: false,
      year: 2020,
      years: computed(() => {
        let yearList = [];
        for (let i: number = datepicker.year - setting.yearsRange; i < datepicker.year + setting.yearsRange; i++) {
          yearList.push(i);
        }
        return yearList;
      }),
      month: 1,
      monthList: computed(() => {
        let result = [];
        for (let i = 1; i <= 12; i++) {
          result.push(i);
        }
        return result;
      }),
      days: computed(() => {
        let year: number = datepicker.year;
        let month: number = datepicker.month;
        let startDate: Date = new Date(year + '/' + month + '/1');
        let lastDate: Date = new Date(year, month, 0);
        let startDateWeekday: number = startDate.getDay();
        let lastDateWeekday: number = lastDate.getDay();
        let startsWeeks = setting.locale.startsWeeks < 0 || setting.locale.startsWeeks > 6 ? 0 : setting.locale.startsWeeks;
        if (startDateWeekday !== startsWeeks) {
          startDate.setDate(startDate.getDate() - (startDateWeekday - startsWeeks));
          if (startDateWeekday - startsWeeks < 0) {
            startDate.setDate(startDate.getDate() - 7);
          }
        }
        if (lastDateWeekday !== startsWeeks + 6) {
          let padding = startsWeeks + 6 - lastDateWeekday;
          lastDate.setDate(lastDate.getDate() + padding);
        }
        let days: Array<DateBlock[]> = [];
        let row: Array<DateBlock> = [];
        let today: string = formatDate(new Date());
        let isDisabled = false;
        while (startDate.getTime() - lastDate.getTime() <= 0) {
          isDisabled = false;
          let yyyy: number = startDate.getFullYear();
          let mm: number = startDate.getMonth() + 1;
          let dd: number = startDate.getDate();
          if (!isDisabled && setting.disabledDate.length > 0) {
            let checkKey = setting.disabledDate.findIndex((rawDate: any) => {
              let tmpData: Array<string> | null = rawDate.match(formatSetting.formatRegexp);
              if (tmpData) {
                let tmpYear = tmpData[formatSetting.yearIndex];
                let tmpMonth = tmpData[formatSetting.monthIndex];
                let tmpDate = tmpData[formatSetting.dateIndex];
                let modifiedDate = formatDate(new Date(tmpYear + '/' + tmpMonth + '/' + tmpDate));
                return modifiedDate == formatDate(startDate);
              }
            });
            isDisabled = checkKey >= 0 ? true : false;
          }
          let dateObj: DateBlock = {
            year: yyyy,
            month: mm,
            day: dd,
            weekday: startDate.getDay(),
            viewDateString: formatDate(startDate, setting.isTwType, 'YYYY/M/D'),
            resultDateString: formatDate(startDate),
            isToday: formatDate(startDate) === today,
            isDisabled: isDisabled,
          };
          row.push(dateObj);
          if (row.length >= 7) {
            days.push(row);
            row = [];
          }
          startDate.setDate(startDate.getDate() + 1);
        }
        return days;
      }),
    });

    watch(
      () => datepicker.show,
      (state) => {
        if (state) {
          const rule = setting.isTwType ? twRegexp.test(selectedValue.value) : yyyymmddRegexp.test(selectedValue.value);
          const day = rule ? (setting.isTwType ? dayjs(yyyymmddFormat(selectedValue.value)) : dayjs(selectedValue.value)) : dayjs();
          datepicker.year = day.year();
          datepicker.month = day.month() + 1;
        }
      }
    );

    watch(
      () => selectedValue.value,
      (value, prevValue) => {
        errorStyle.value = !value || twRegexp.test(value) || yyyymmddRegexp.test(value) ? false : true;
        // emit('validate', errorStyle);
        // console.log('value, prevValue', value, prevValue, errorStyle.value);
        if (value === '' || (value !== prevValue && formatSetting.formatRegexp.test(value))) {
          selectedValue.value = formatDate(value, setting.isTwType, setting.locale.format);
          emit('update:modelValue', formatDate(value));
        }
      }
    );

    const selectToday = () => {
      const today = dayjs();
      datepicker.year = today.year();
      datepicker.month = today.month() + 1;
      selectedValue.value = formatDate(today.format());
      datepicker.show = false;
    };

    const handleMonth = (type: string) => {
      const tempYear =
        type === 'prev'
          ? datepicker.month == 1
            ? datepicker.year - 1
            : datepicker.year
          : datepicker.month == 12
          ? datepicker.year + 1
          : datepicker.year;
      const tempMonth = type === 'prev' ? (datepicker.month == 1 ? 12 : datepicker.month - 1) : datepicker.month == 12 ? 1 : datepicker.month + 1;
      datepicker.year = tempYear;
      datepicker.month = tempMonth;
    };

    const select = (value = '') => {
      selectedValue.value = value;
      datepicker.show = false;
    };

    const onFocus = (event: any) => {
      let potisionY = event.target.getBoundingClientRect().y;
      needMoveToUp.value = false;
      if (window.innerHeight - potisionY <= 290) {
        needMoveToUp.value = true;
      }
      datepicker.show = true;
    };

    const onInput = (value: any) => {
      close();
      const rule = setting.isTwType ? twRegexp.test(value) : yyyymmddRegexp.test(value);
      if (rule) {
        const result = formatDate(setting.isTwType ? yyyymmddFormat(value) : value);
        emit('update:modelValue', result);
      } else {
        emit('update:modelValue', value);
      }
    };

    const close = () => {
      datepicker.show = false;
    };

    const clear = () => {
      select();
    };

    return {
      setting,
      value: selectedValue,
      errorStyle,
      getTwYear,
      datepicker,
      handleMonth,
      selectToday,
      select,
      clear,
      needMoveToUp,
      onFocus,
      onInput,
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/style/variable.scss';
.el-input.error {
  :deep(.el-input__inner) {
    border: 1px solid #f56c6c;
  }
}
.mask {
  position: fixed;
  z-index: $zIndex-date-mask;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bg-mask;
}

.pickerFrame {
  position: absolute;
  z-index: $zIndex-date-picker;
  width: 305px;
  &.pickerFrameUp {
    top: -300px;
  }
}

.picker {
  position: relative;
  padding: $spacing-20;
  margin-top: $spacing-10;
  border: 1px solid $border-color;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  background-color: white;
  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    margin-left: -5px;
    display: block;
    width: 10px;
    height: 10px;
    border: 1px solid $border-color;
    border-bottom-color: transparent;
    border-right-color: transparent;
    transform: rotate(45deg);
    background-color: white;
  }
  .header {
    .el-select {
      width: 100px;
      margin-left: $spacing-10;
      & + .el-select {
        margin-right: $spacing-10;
      }
    }
  }
  .calendar {
    display: grid;
    width: 100%;
    margin: $spacing-10 0 $spacing-20 0;
    color: $text-color;
    .title {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      justify-items: center;

      .weekend {
        color: $border-color;
      }
    }
    .content {
      display: grid;
      ul {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        justify-items: center;
      }

      .day {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        text-align: center;
      }

      .highlighted:hover,
      .infocus:hover,
      .outfocus:hover {
        @extend %link-pointer;
        color: $black;
        background: $bg-date-hover;
      }

      .disabled:before {
        border-top-color: #aaa;
      }

      .outfocus {
        color: $date-disabled-color;
      }

      .selected,
      .selected:hover {
        color: $white;
        background: $bg-date-active;
      }

      .disabled,
      .disabled:hover {
        background: #f5f5f5;
        border-color: #f5f5f5;
        color: $date-disabled-color;
        cursor: pointer;
      }

      .highlighted.disabled,
      .highlighted.disabled:hover {
        background: #bbb;
      }
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    .el-button + .el-button {
      margin-left: 0;
      margin-top: $spacing-10;
    }
  }
}
</style>
