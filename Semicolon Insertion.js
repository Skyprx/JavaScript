// Source: https://flaviocopes.com/javascript-automatic-semicolon-insertion/

// The rules of JavaScript Automatic Semicolon Insertion

// The JavaScript parser will automatically add a semicolon when, during the parsing of the source code, it finds these particular situations:

//     when the next line starts with code that breaks the current one (code can spawn on multiple lines)
//     when the next line starts with a }, closing the current block
//     when the end of the source code file is reached
//     when there is a return statement on its own line
//     when there is a break statement on its own line
//     when there is a throw statement on its own line
//     when there is a continue statement on its own line

// Examples of code that does not do what you think

// Based on those rules, here are some examples.

// Take this:

// const hey = 'hey'
// const you = 'hey'
// const heyYou = hey + ' ' + you

// ['h', 'e', 'y'].forEach((letter) => console.log(letter))

// You’ll get the error Uncaught TypeError: Cannot read property 'forEach' of undefined because based on rule 1 JavaScript tries to interpret the code as

// const hey = 'hey';
// const you = 'hey';
// const heyYou = hey + ' ' + you['h', 'e', 'y'].forEach((letter) => console.log(letter))
