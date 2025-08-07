type Feature = { option1: string, option2: string }
type FeatureToggle = { [K in keyof Feature]: boolean };

const featureToggles: FeatureToggle = {
  option1: true,
  option2: false,
}




// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type ConcreteUser = Concrete<MaybeUser>;

type RequiredUser = Required<MaybeUser>;

const maybeUser: MaybeUser = {
  id: '1',
};

const concreteUser: ConcreteUser = {
  id: '1',
};



// Key Remapping via as
// Prefix all keys
type Getters<Type> = {
    [Key in keyof Type as `get${Capitalize<string & Key>}`]: () => Type[Key]
};

interface Person {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person>;

// Remove keys conditionally
type RemoveAge<T> = {
  [K in keyof T as K extends 'age' ? never : K]: T[K];
};

type Original = { name: string; age: number };
type WithoutAge = RemoveAge<Original>;

export {};

