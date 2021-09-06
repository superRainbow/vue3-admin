export const settingDefault = {
  name: 'date',
  placeholder: '請輸入',
  autocomplete: 'off',
  disabled: false,
  yearsRange: 10,
  disabledDate: [],
  showButton: true,
  isTwType: false,
  locale: {
    format: 'YYYY/M/D',
    weekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    startsWeeks: 0,
    todayBtn: 'Today',
    clearBtn: 'Clear',
    closeBtn: 'Close',
    slash: ['/', '/'],
    slashOffset: [5, 8, 11],
  },
};
export const TwStartYear = 1911;
export const yyyymmddRegexp = new RegExp('^\\d{4}[\\-/\\.](0?[1-9]|1[012])[\\-/\\.](0?[1-9]|[12][0-9]|3[01])$');
export const twRegexp = new RegExp('^\\d{2,3}[\\-/\\.](0?[1-9]|1[012])[\\-/\\.](0?[1-9]|[12][0-9]|3[01])$');
