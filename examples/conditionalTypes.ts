//  flattens array types to their element types

//  Conditional types provide us with a way to
//  infer from types we compare against in the true branch using the infer keyword.

// The infer keyword lets you capture a part of a type in the true branch of a conditional type.
// This allows you to extract subtypes from complex structures.

// example 1

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type FlattenArray = Flatten<string[]>;

type Num = Flatten<number>;


// example 2
type ValidateUserData<Type> = {
  [Key in keyof Type]: Type[Key] extends { id: number } ? true : false;
};

const userData = {
  model1: {
    id: 11,
  },
  model2: {
    id: 22,
  },
  model3: {
    name: 'name',
  },
};

type validUserData = ValidateUserData<typeof userData>;



// example 2
// https://github.com/microsoft/TypeScript/issues/24929

interface ISearchByOrderId {
  orderId: string,
}

interface ISearchByUserId {
  userId: string,
}

interface IOrderDetail {
  orderName: string;
}

interface IUserDetail {
  userName: string;
}

type GetSearchResultReturnType<T> = T extends ISearchByUserId ? IUserDetail : IOrderDetail;

const isSearchByUserId =
  (searchData: unknown): searchData is ISearchByUserId =>
    !!searchData && typeof searchData === 'object' && 'userId' in searchData;


const getSearchResult = <T extends ISearchByUserId | ISearchByOrderId>(searchData: T):
  T extends ISearchByUserId ? IUserDetail : IOrderDetail  => {
  // call api to get order date

  if (isSearchByUserId(searchData)) {
    // call api to get user date
    return {
      userName: 'userName',
    } as any;
  }

  return {
    orderName: 'userName',
  } as any;
};

const userDetail = getSearchResult({ userId: '1' });
const orderDetail = getSearchResult({ orderId: '1' });





// Distributive conditional types
type TypeName<T> = T extends string ? "stringType" : 'otherType'

type ArrayTypeName<T> = T extends string[] ? 'stringArray' : 'other'
type ArrayTypeName2<T> = Array<T> extends string[] ? 'stringArray' : 'other'

type C = TypeName<string | number>
type D = ArrayTypeName<string[] | number[]>
type E = ArrayTypeName2<string | number>

// To avoid the distributivity
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 'StrArrOrNumArr' is no longer a union.
type StrArrOrNumArr = ToArrayNonDist<string | number>;




export {};
