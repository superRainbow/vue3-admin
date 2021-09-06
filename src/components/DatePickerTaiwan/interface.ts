export interface FormatSettingObject {
  format: string;
  formatRegexp: RegExp;
  yearIndex: number;
  monthIndex: number;
  dateIndex: number;
}

export interface LocaleObject {
  format: string;
  weekday: string[];
  months: string[];
  startsWeeks: number;
  todayBtn: string;
  clearBtn: string;
  closeBtn: string;
  slash: string[];
  slashOffset: number[];
}

export interface DateBlock {
  year: number;
  month: number;
  day: number;
  weekday: number;
  viewDateString: string;
  resultDateString: string;
  isToday: boolean;
  isDisabled: boolean;
}

export interface ComponentSetting {
  type: string;
  placeholder: string;
  autocomplete: string;
  disabled: boolean;
  yearsRange: number;
  disabledDate: string[];
  showButton: boolean;
  isTwType: boolean;
  locale: LocaleObject;
}
