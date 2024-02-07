export type IRequest <T> = {
  count: number
  next: string | null
  previous: string
  results: Array<T>
}