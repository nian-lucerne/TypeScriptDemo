const failingMethod = () => {
  throw new Error('error!');
}

try {
  failingMethod();
} catch (error: unknown) {
  console.log(error);
}


// handle error with unknown type in try catch

try {
  failingMethod();
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}

// handle custom error

class CustomErrorClass {
  public message: string;

  constructor(message: string) {
    this.message = message;
  }
}

const anotherFailingMethod = () => {
  // throw new CustomErrorClass('custom error!');
  throw {message: 'custom object!'};
}


const isCustomClassError = (error: unknown): error is CustomErrorClass => {
  return error instanceof CustomErrorClass
}

const isCustomObjectError = (error: unknown): error is {message: string} => {
  return !!error && typeof error === 'object' && 'message' in error
}

try {
  anotherFailingMethod();
} catch (error: unknown) {
  if (isCustomClassError(error)) {
    console.log(error.message);
  } else if (error && typeof error === 'object' && 'message' in error) {
    console.log(error.message);
  }
}








export {};
