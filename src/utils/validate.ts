import { getLocalStorage } from '@/utils/localStorage';

export function isAbsolutePath(path: string) {
  return /^(https?|tel|mailto)/.test(path);
}

export function isAuthenticated() {
  return getLocalStorage('token') ? true : false;
}
