let l1 = 5;
let l2 = 10;

function suma(num1, num2) {
    let s = num1 + num2;
    return s
}
function roznica(num1, num2) {
    let r = num1 - num2;
    return r
}
function iloczyn(num1, num2) {
    let i = num1 * num2;
    return i
}
console.log("Wynik dodawania wynos " + suma(l1,l2), 
"Wynik odejmowania wynosi " + roznica(l1,l2), 
"Wynik mnożenia wynosi " + iloczyn(l1,l2))

if (suma(l1,l2) < 0) {
    console.log("Wynik jest nieprawidłowy");
}
else if (roznica(l1,l2) < 0) {
    console.log("Wynik jest nieprawidłowy");
}
else if (iloczyn(l1,l2) < 0) {
    console.log("Wynik jest nieprawidłowy");
}