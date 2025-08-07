// example 1, continue the example from NonNullable.ts
// deeply remove undefined
type RemoveUndefined<T> = T extends undefined ? never : T
type RemoveUndefinedInObject<T> = {
  [Key in keyof T]: RemoveUndefined<T[Key]>
}

type User = {
  name: string | undefined,
  id: string | undefined,
  address: {
    city: string | undefined,
  }
}

type NonNullableUser = RemoveUndefinedInObject<User>


// Recursive of Types
type RemoveUndefinedDeep<T> = {
  [Key in keyof T]: T[Key] extends object ? RemoveUndefinedDeep<T[Key]> : RemoveUndefined<T[Key]>
}
type DeepNonNullableUser = RemoveUndefinedDeep<{
  name: string | undefined,
  id: string | undefined,
  address: {
    city: string | undefined,
  }
}>

const nullableUser: User = {
  name: '1',
  id: '1',
  address: {
    city: undefined,
  }
};

const nonNullableUser: DeepNonNullableUser = {
  name: '1',
  id: '1',
  address: {
    city: undefined,
  }
}

// example 2, trim left
type TrimLeft<T extends string> =
  T extends ` ${infer Rest}` ? TrimLeft<Rest> : T;

type Trimmed = TrimLeft<"   hello" | " world">;

// example 3, camel to snake
type CamelToSnake<T extends string> = string extends T ? string :
  T extends `${infer C0}${infer R}` ?
    `${C0 extends Lowercase<C0> ? "" : "_"}${Lowercase<C0>}${CamelToSnake<R>}` :
    "";

type SnakeCase = CamelToSnake<"camelToSnake">

// Without string extends T ? string : ..., TypeScript would try to recursively infer from string, which is too generic, leading to infinite recursion,
// But string extends T is only true when T is the general string type, not a string literal

export {};


