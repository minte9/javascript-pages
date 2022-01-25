/**
 * A label is an identifier with a colon before the loop.
 * Labels are not to jump into an arbitrary place in the code.
 */

outer: while(true) {
    inner: for(let i=0; i<10; i++) {
        if (i == 5) {
            break outer;
        }
        console.log(i);
    }
}

/*
    0
    1
    2
    3
    4
*/