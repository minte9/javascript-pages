/**
 * When 'use script' it is located at the top of a script, 
 * the whole script works the “modern” way 
 * starting with ECMAScript 5
 * 
 * To keep the old code working, 
 * modern modifications are off by default.
 */
"use strict";

let a = 1;
    // Correct

b = 1;
    // ReferenceError: b is not defined

