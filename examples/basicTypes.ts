// Tuple
// includes two sets of values of different data types.
const employee: [number, string] = [1, "Steve"];

// Never
// The 'never' type is used when you are sure that something is never going to occur.
// For example, you write a function which will not return to its end point or always throws an exception.
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

//Literal Types
let x: "hello" = "hello";
x = "hello";

//Combining literals into unions
type Easing = "ease-in" | "ease-out" | "ease-in-out";


//Interfaces are better when you need to define a new object or method of an object
// Extends and implements
interface TodoProps  {
  name: string;
  isCompleted: boolean
}


// const Todo: React.FC<TodoProps> = ({ name, isCompleted }) => {
// ...
// };



//Types are better when you need to create functions,
// for example, a function that’s going to return an object called,
// type alias is more recommended for this approach

//type aliases can define composite types such as objects, unions, s primitive types( numbers and strings)
//interface, however, can only define objects

type Person = {
  name: string,
  age: number
};

type ReturnPerson = (
  person: Person
) => Person;

const returnPerson: ReturnPerson = (person) => {
  return person;
};



//extends
interface IMyObject {
  label: string,
}

interface IMyObjectWithSize extends IMyObject{
  size: number
}
const newObject: IMyObjectWithSize = {
  label: 'label',
  size: 10,
}




//Declaration merging
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };

export {};


