function fibonacci(numbers) {
    let n1 = 0;
    let n2 = 1;
    let somme = 0;

    for (let i = 2; i<=numbers; i++) {
        somme = n1 + n2;

        n1 = n2;

        n2 = somme;
    }
    return numbers ? n2 : n1;
}
console.log(fibonacci(8));