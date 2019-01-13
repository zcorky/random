/**
 * get random number(integer)
 * @param min min number
 * @param max max number
 * @returns number
 */
export function number(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}