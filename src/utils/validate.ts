import { getLocalStorage } from '@/utils/localStorage.ts';

export function isAbsolutePath(path: string) {
  return /^(https?|tel|mailto)/.test(path);
}

export function isAuthenticated() {
  return getLocalStorage('token') ? true : false;
}
