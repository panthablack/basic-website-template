export const DEGREE = Math.PI / 180

export const RADIAN = 180 / Math.PI

export const EPSILON = 0.000001

export const CONFIG = {
  ARRAY_TYPE: typeof Float32Array !== 'undefined' ? Float32Array : Array,
  RANDOM: Math.random,
  ANGLE_ORDER: 'zyx',
}

/**
 * Symmetric round
 * see https://www.npmjs.com/package/round-half-up-symmetric#user-content-detailed-background
 *
 * @param {Number} a value to round
 * @returns {Number}
 */
export function round(a: number): number {
  if (a >= 0) return Math.round(a)

  return a % 0.5 === 0 ? Math.floor(a) : Math.round(a)
}

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */
export function setMatrixArrayType(type: ArrayConstructor | Float32ArrayConstructor) {
  CONFIG.ARRAY_TYPE = type
}

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 * @returns {Number}
 */
export function toRadian(a: number) {
  return a * DEGREE
}

/**
 * Convert Radian To Degree
 *
 * @param {Number} a Angle in Radians
 * @returns {Number}
 */
export function toDegree(a: number) {
  return a * RADIAN
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
export function equals(a: number, b: number): boolean {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b))
}
