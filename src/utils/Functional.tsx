export type UnaryOp<T> = (element: T) => T;

export function atIndex<S>(array: S[], index: number, op: UnaryOp<S>) {
  return [
    ...array.slice(0, index),
    op(array[index]),
    ...array.slice(index + 1)
  ];
}
