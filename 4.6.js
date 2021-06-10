function factorial(a) {
    if (a === 0) {
        return 1;
    }
    return a * factorial(a-1);
    // cette fonction permet de donner la factorielle d'un nombre en récursive
}
console.log(factorial(6));
