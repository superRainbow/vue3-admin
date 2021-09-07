import dayjs from 'dayjs';
import { TW_START_YEAR } from '@/utils/constants';

export const getTwYear = (year: number): number => year - TW_START_YEAR;
export const formatDate = (date: Date | string, showTwFormat?: boolean, format = ''): string => {
  if (date) {
    const twDate = `${getTwYear(dayjs(date).year())}/${dayjs(date).month() + 1}/${dayjs(date).date()}`;
    return showTwFormat ? twDate : dayjs(date).format(format);
  }
  return '';
};
export const yyyymmddFormat = (string: string): string => {
  const array = string.split('/');
  return `${parseInt(array[0]) + TW_START_YEAR}/${array[1]}/${array[2]}`;
};
