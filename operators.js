/*
Bitwise operators

& - Bitwise AND operator - check a condition
| - Bitwise OR operator  - add a condition

Example: Permission

READ PERMISSION: 001 =>    00000001 => 1
WRITE PERMISSION: 010 =>   00000010 => 2
EXECUTE PERMISSION: 100 => 00000100 => 4

*/


const READ_PERMISSION = 1;
const WRITE_PERMISSION = 2;
const EXECUTE_PERMISSION = 4;

let myPermission = 0; // initial permission is none (0)

//assigning read permission

myPermission = myPermission | READ_PERMISSION;
let checkReadPermission = (myPermission & READ_PERMISSION) ? 'yes' : 'no';
console.log('READ ONLY PERMISSION: ', checkReadPermission);

//Adding all permissions
myPermission = myPermission | READ_PERMISSION | WRITE_PERMISSION | EXECUTE_PERMISSION;
console.log('#', myPermission)

/*
myPermission :  00000111
                00000001
                00000010
                00000100
*/

let checkAllPermission =
    (myPermission & READ_PERMISSION) &&
        (myPermission & WRITE_PERMISSION) &&
        (myPermission & EXECUTE_PERMISSION) ? 'yes' : 'no';

console.log('ALL PERMISSIONS: ', checkAllPermission);
