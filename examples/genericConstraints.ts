// example 1

type User = {
  username: string,
}

type Car = {
  carName: string,
}

type CreateUserArray = <T extends User>(arg:T) => T[]

const createUserArray: CreateUserArray = (...keys) => [...keys]

const userArray = createUserArray({username: '11', email: ''});

const carArray = createUserArray({carName: '22'}) //error



// example 2

type GetKey = <T, K extends keyof T>(data: T, key: K) => T[K]

const getKey: GetKey = (data, key) => data[key]

const user = { email: 'email', name: 'name' }

getKey(user, 'email') // ok
getKey(user, 'phone') // error







export {};
