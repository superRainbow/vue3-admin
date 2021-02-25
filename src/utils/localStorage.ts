export function setLocalStorage(setName: string, data: string | []) {
  localStorage.setItem(
    setName,
    Array.isArray(data) ? JSON.stringify(data) : data
  );
}

export function getLocalStorage(setName: string): string {
  return localStorage.getItem(setName) || '';
}

export function removeLocalStorage(setName: string) {
  localStorage.removeItem(setName);
}
