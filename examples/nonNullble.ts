// example 1: Non nullable object

type RemoveNotNull<T> = T extends null ? T : never
type RemoveNull<T> = T extends null ? never : T
type NUllType = RemoveNotNull<string | null>
type NonNullableType = RemoveNull<string | null>
type RemoveNullInObject<T> = {
  [Key in keyof T]: RemoveNull<T[Key]>
}
type NonNullableUser = RemoveNullInObject<{
  name: string | null,
  id: string | null
}>


// example 2: Non nullable array

const nullableItems = [null, { item: "item1" }]

type NotNullItem = RemoveNull<typeof nullableItems[0]>

const isNotNull = <T>(x: T):x is RemoveNull<T> => { return !!x }

const result = nullableItems.filter<NotNullItem>(isNotNull)




export {};
