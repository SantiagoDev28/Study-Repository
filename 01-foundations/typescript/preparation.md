# Undertanding TypeScript - Preparation

## Goal

Understand why TypeScript exists, what problems it solves, and when it should be used..

## Concepts

- Why TypeScript was create
- Core TypeScript concepts
- What Does the TypeScript Compiler Do?
- What Is tsconfig.json?

## What I Can Explain

### Why should I use TypeScript?

- TypeScript helps detect many common programming errors before running the application.  
- It performs static code analysis while you write code.
- It improves code reliability and the overall development experience.

### JavaScript vs TypeScript

- JavaScript error are often discovered during runtime.
- TypeScript detects many type-related errors before execution.
- Static type checking help prevent common mistakes suach as invalid types, missing properties, and incorrect function arguments.
- If you already Know JavaScript, learning TypeScript is straightforward because it is a superset of JavaScript.
- The learning curve is small compared to the benefits it provides.

### Setting up a TypeScript workspace

- Configure **.editorconfig** and **.gitignore.**.
- Initialize the project with **pnpm init**.
- Install TypeScript as a development dependency.

```
pnpm add -D typescript
```

### TypeScript Transpilation to JavaScript

TypeScript was created to improve JavaScript development by adding a static type system. It helps developers detect many common errors and receive immediate feedback before running the application.
However, web browsers and Node.js cannot execute TypeScript code directly. They only understand JavaScript.
To solve this, the TypeScript compiler transpiles `.ts` files into JavaScript. During this process, it checks the code for type errors and generates JavaScript compatible with the ECMAScript version configured for the project.
Once the transpilation is complete, the generated JavaScript can be executed by browsers or Node.js.

### What is `tsconfig.json`?

The `tsconfig.json` file stores the configuration used by the TypeScript compiler.

It defines how the project should be compiled and analyzed, including options related to the compilation target, modules, and type checking.

**Generate a tsconfig.json file** 
```
pnpm tsc --init 
```
**Run TS files**
```
pnpm tsx file-name.ts
```

Using `pnpm dlx tsx --watch`, we receive immediate feedback whenever the code changes.

## Doubts

none.

## Resources

- Platzi course 
- Official TypeScript Documentation