Simple CRUD operations : Book Keeping

Language   :  TypeScript/NodeJS
Database   :  MongoDB
Framework  :  Express
Compiler   :  TypeScript

To Run -

Use command 'tsc' to compile files.
Use command 'tsc -w' to trigger recompilation on changes.

Follow 'tsconfig.json' file for configuring typescript compiler.

In package.json set '"start" : "node ./bin/main.js"'. In command line use 'npm start' or 'nodemon' to start the server.

Errors - 

1. File> authors.controller.js

error-message> cannot find property 'database' of undefined

Context of 'this' was lost inside a regular function. Arrow function used instead.

2. File> books.controller.ts

error-message> The property 'name' does not exist on value of type 'Document[]'

The problem lays in missing TypeScript typing:

    author = author[0].name

Throws The property 'name' does not exist on value of type 'Document[]'.
The easiest way is to explicitly type variable as any

    author: any



Referrences - 

https://github.com/Automattic/mongoose/issues/1959

https://www.typescriptlang.org/docs/handbook/compiler-options.html

https://stackoverflow.com/questions/18083389/ignore-typescript-errors-property-does-not-exist-on-value-of-type

https://blog.lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795

