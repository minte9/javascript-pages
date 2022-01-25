/**
 * A separate function act as a great comment.
 * It good to create functions even if we don't reuse them.
 */

function showPrimes(n) {
    for (let i=2; i<n; i++) {

        if (isPrime(i)) {
            console.log(i + ' is prime');
        }
    }
}

function isPrime(n) {
    for (let i=2; i<n; i++) {
        if (n%i == 0) return false;
    }
    return true;
}

showPrimes(10);

/*
    2 is prime
    3 is prime
    5 is prime
    7 is prime
*/