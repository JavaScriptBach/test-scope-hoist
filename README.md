# About
This is a repro for a scope hoisting bug.

```
Unhandled rejection TypeError: $360c99753861bedf$export$6f093cfa640b7166 is not a function
```

# Steps
1. Checkout repo
2. npm ci
3. `npm run build` (Runs server with scope-hoisted JS)
4. Go to localhost:1234 and upload a docx file, you will get an error in the console.
5. npm run start (Runs server without scope-hoisting)
6. Repeat step 4, there will be no console error.
