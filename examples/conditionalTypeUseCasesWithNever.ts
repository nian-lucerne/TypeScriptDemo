
type UnionNever = string | never // string
type IntersectionNever = string & never // never


type Filter<T, U> = T extends U ? T : never;
type Intersection = Filter<1|2|3|4, 2>
type FilterAndToArray<T, U> = T extends U ? T[] : never;
type IntersectionToArray = FilterAndToArray<1|2|3, 2|3|4>



export {};
