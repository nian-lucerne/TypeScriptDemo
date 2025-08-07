type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>

type QuietGreeting = Lowercase<Greeting>


type LowercaseGreeting = "hello, world";
type CapitalizeGreeting = Capitalize<LowercaseGreeting>;

type UncapitalizeGreeting = Uncapitalize<Greeting>;

export {};

