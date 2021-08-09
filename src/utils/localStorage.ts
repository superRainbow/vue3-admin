import { isJson } from '@/utils/validate';

export function setLocalStorage(setName: string, data: string | object) {
  localStorage.setItem(setName, typeof data === 'object' ? JSON.stringify(data) : data);
}

export function getLocalStorage(setName: string): string {
  const data = localStorage.getItem(setName);
  return data ? (isJson(data) ? JSON.parse(data) : data) : '';
}

export function removeLocalStorage(setName: string) {
  localStorage.removeItem(setName);
}
