//The new satisfies operator lets us validate that the type of expression matches some type,
// without changing the resulting type of that expression.



type User = {
  id: string | null
}

const User1: User = {
  id: 'hello'
}
console.log(User1.id.toUpperCase()); // Error because the id might be null


const User2 = {
  id: 'hello'
} satisfies User
console.log(User2.id.toUpperCase()); // Allowed



// example: Preserves literal types
type Color = string | {r: number; g: number; b: number};
const red: Color = 'red';
const green = 'green' as Color;
const blue = 'blue' satisfies Color;

export {};
