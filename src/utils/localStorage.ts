export function setLocalStorage(setName: string, data: string | object) {
  localStorage.setItem(
    setName,
    typeof data === 'object' ? JSON.stringify(data) : data
  );
}

export function getLocalStorage(setName: string): string {
  return localStorage.getItem(setName) || '';
}

export function removeLocalStorage(setName: string) {
  localStorage.removeItem(setName);
}
