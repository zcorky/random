import { number as random } from './number';

export function from<T>(values: T[], count: number = 1) {
  if (count === 1) {
    return values[random(0, values.length)];
  }

  return Array(count)
  .fill(undefined)
  .map(() => values[random(0, values.length)]);
}