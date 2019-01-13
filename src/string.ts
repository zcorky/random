import { number as random } from './number';

const DEFAULT_CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * get random string
 * @param length random string length, default: 16
 * @param charset random string base, default: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
 * @returns string
 */
export function string(length: number = 16, charset: string = DEFAULT_CHARSET) {
  const clen = charset.length;
  return Array(length)
    .fill(undefined)
    .map(() => charset[random(0, clen)])
    .join('');
}