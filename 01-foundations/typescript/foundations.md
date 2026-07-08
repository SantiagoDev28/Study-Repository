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
Once a variable has a type, TypeScript only allows access to methods that belong to that type.
For example, `string` values provide methods such as `toLowerCase()`, while `number` values do not.
