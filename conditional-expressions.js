/*
There are two types of condition statements in JavaScript
1- IF-ELSE
2- SWITCH-CASE

*/


let hour = null;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon!');
else
    console.log('Good evening!');



//Switch-Case

let role = 'moderator';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}