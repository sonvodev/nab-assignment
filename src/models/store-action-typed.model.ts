export interface IActionTyped<T = any> {
  type: string
  payload?: T
  [x: string]: any
}