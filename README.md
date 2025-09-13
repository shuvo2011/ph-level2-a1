# TypeScript Blog

## 1. What is the use of the keyof keyword in TypeScript? Provide an example.

`keyof` হলো TypeScript-এর একটি **type operator**।  
এটি কোনো object type এর **সব keys** বের করে তাদেরকে একটা **union type** বানায়।  

## 📘 Example

```ts
type Person = {
  name: string;
  age: number;
  city: string;
};

// keyof Person মানে:
type PersonKeys = keyof Person; 
// => "name" | "age" | "city"
```

---

## 1. Explain the difference between any, unknown, and never types in TypeScript.

- **any** → যেকোনো কিছু হতে পারে, টাইপ-চেক নেই।  
```ts
let x: any = 10;
x = "hello"; // allowed
```

- **unknown** → নিরাপদ any, ব্যবহার করার আগে টাইপ-চেক দরকার।  
```ts
let y: unknown = "world";
if (typeof y === "string") {
  console.log(y.toUpperCase());
}
```

- **never** → এমন কিছু যা কখনো ঘটবে না।  
```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```

---


