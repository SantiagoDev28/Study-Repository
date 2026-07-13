# TypeScript Foundations - Types, Variables, Functions and more.

## Goal
Learn Foundations of TypeScript.

## Concepts

- Types
- Variables
- Functions
- Objects
- Arrays
- Tuples

## What I Can Explain
### Types.
In TypeScript, every variable has a type. The type can be declared explicitly or inferred automatically by the compiler. The static type system helps detect many common programming errors before runtime. 
Types can be assigned explicitly by the developer. 
```
let myName: string = "Santiago Hurtado"
```
TypeScript can also infer the type of a variable based on its initial value.
```
let myAge = 19 
// myAge is type of Number.
```
There is a type called any in TypeScript. This type allows you to assign any value to a variable. For example, if a variable starts as a string, it can later be changed to a number or any other type. However, using any is considered a bad practice because it breaks TypeScript's type safety. It exists mainly to help when migrating JavaScript code to TypeScript or in situations where the type is unknown.

Literal types allow you to define exact values instead of general types. For example, instead of allowing any string, you can specify that a variable can only be "admin" or "user". This provides better type safety and helps prevent invalid values from being passed to functions or stored in variables.
For example: 
```
type Role = 'admin' | 'user';
```
TypeScript infers the most appropriate type based on how a variable can be used.

- A let variable can change its value, so TypeScript usually infers a broader type such as number or string.
- A const variable cannot be reassigned, so TypeScript can safely infer a literal type such as 20 or "admin".

Once a variable has a type, TypeScript only allows access to methods that belong to that type.
For example, `string` values provide methods such as `toLowerCase()`, while `number` values do not.