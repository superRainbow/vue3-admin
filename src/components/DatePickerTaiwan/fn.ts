import dayjs from 'dayjs';
import { TwStartYear } from '@/components/DatePickerTaiwan/const';

export const getTwYear = (year: number): number => year - TwStartYear;
export const formatDate = (date: Date | string, showTwFormat?: boolean, format = ''): string => {
  if (date) {
    const twDate = `${getTwYear(dayjs(date).year())}/${dayjs(date).month() + 1}/${dayjs(date).date()}`;
    return showTwFormat ? twDate : dayjs(date).format(format);
  }
  return '';
};
export const yyyymmddFormat = (string: string): string => {
  const array = string.split('/');
  return `${parseInt(array[0]) + TwStartYear}/${array[1]}/${array[2]}`;
};
