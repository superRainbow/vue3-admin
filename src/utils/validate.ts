import { getLocalStorage } from '@/utils/localStorage';

export function isAbsolutePath(path: string) {
  return /^(https?|tel|mailto)/.test(path);
}

export function isAuthenticated() {
  return getLocalStorage('accessToken') ? true : false;
}

export function isPostOrPut(method: string) {
  return ['post', 'put'].indexOf(method) >= 0 ? true : false;
}
