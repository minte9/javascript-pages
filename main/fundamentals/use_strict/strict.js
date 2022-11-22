/**
 * Modern modifications are off by default, 
 * to keep the old code working
 * 
 * When 'use script' it is located at the top of a script, 
 * the whole script works the “modern” way 
 * starting with ECMAScript 5
 * .
 */
"use strict";

let a = 1;  // Correct
b = 1;      // ReferenceError: b is not defined