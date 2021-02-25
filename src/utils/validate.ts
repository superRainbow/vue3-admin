export function isAbsolutePath(path: string) {
  return /^(https?|tel|mailto)/.test(path);
}
