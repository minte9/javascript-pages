### TypeScript

TypeScript is a subset of Javascript developed by Microsoft that adds static typing and other useful features.

- Static typing (optional) helps catch bugs during development.
- Type inference automatically detects variable types.
- Auto-complete, navigation and refactoring in editors like VSCode.

Install TypeScript globally:

~~~bash
npm install -g typescript
~~~

hello.ts

~~~js
function greet(item: string): string {
    return `Hello, ${item}`;
}

const item = 'World';
console.log(greet(item));
~~~

Run:

~~~bash
tsc hello.ts
~~~

After compiling with the TypeScript compiler, all type information is stripped, and you're left with valid JavaScript.

hello.js

~~~js
function greet(item) {
    return "Hello, ".concat(item);
}
var item = 'World';
console.log(greet(item));
~~~

### Key Difference

The compilation result hello.js is often identical to that you could have written yourself in Javascript.  
TypeScript doesn't make your code "safer" at runtime.  
It makes it safer and smarter at development time.  