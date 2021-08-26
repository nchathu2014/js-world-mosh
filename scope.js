/*
Scope can be global or local
*/

//01
const message = 'hello';
console.log(message); // 'Hellow

//02
// If we add the variable into a `Code Block`, then that variable canbe access
//within that code block

{
    const another_message = 'I am another message';
    console.log(another_message);// this will work
}

//console.log(another_message); // This will not work

//03
function start() {
    const greet = 'Happy birthday!!!';

    if (true) {
        const another = 'Another message';
        console.log(greet);
    }
    console.log(another);
}

start();















































