function add<T, A>(a: T, b: A, c: boolean): void {
  console.log(typeof a);
  console.log(typeof b);
}

const res1: void = add<number, string>(5, "10", true);
const res2: void = add(5, "10", false);
