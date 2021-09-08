import _ from 'lodash';

export const findObjectInArray = (array: any[], key: string, value: any) => _.find(array, [key, value]);
