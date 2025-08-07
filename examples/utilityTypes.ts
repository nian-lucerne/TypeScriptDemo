// Awaited<Type>
type A = Awaited<Promise<string>>;

// Partial<Type>

// Required<Type>

// Readonly<Type>

// Record<Keys, Type>

// Pick<Type, Keys>

// Omit<Type, Keys>

// Exclude<UnionType, ExcludedMembers>
type Exclude1 = Exclude<"a" | "b" | "c", "a" | "b">;

type Exclude2 = Exclude<string | number | (() => void), Function>;

// Extract<Type, Union>
type Extract0 = Extract<"a" | "b" | "c", "a" | "f">;


// NonNullable<Type>
type NonNullable0 = NonNullable<string | number | undefined>;


// ReturnType<Type>
type ReturnType0 = ReturnType<() => string>;



export {};
