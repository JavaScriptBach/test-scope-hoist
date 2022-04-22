# About
This is a repro for a scope hoisting bug.

# Steps
1. Checkout repo
2. npm ci
3. npm run build
4. Go to localhost:1234 and upload a docx file, you will get an error in the console.
5. npm run start
6. Repeat step 4, there will be no console error.
