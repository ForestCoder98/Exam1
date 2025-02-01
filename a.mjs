import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
function multiply(a, b){
    let digitA = Number(a);
    let digitB = Number(b);
    
    if (isNaN(digitA) || isNaN(digitB)){
        return NaN;
}     else if ( digitA == Infinity ||  digitB == Infinity ){
        return Infinity
    } else if ( digitA == -Infinity || digitB == -Infinity){
        return -Infinity
        } else if ( digitA == 0 || digitB == 0 ){
        return 0
    }
    return digitA * digitB;
}


//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Sum function");

tests.isEqual(multiply(7, 71), 497, "Sum of 7 and 71 should be 497");
tests.isEqual(multiply(10, 100), 1000, "Sum of 10 and 100 should be 1000");
tests.isNotANumber(multiply("cat", 9), "Sum of cat and 7 should be NaN");
tests.isEqual(multiply(0, 17), 0, "Sum of 0 and 17 should be 0");
tests.isEqual(multiply(Infinity, 1), Infinity, "Sum of infinity and 1 should be Infinity");
tests.isEqual(multiply(-Infinity, 1), -Infinity, "Sum of -infinity and 1 should be -Infinity");
tests.isEqual(multiply("5", "2"), 10, "Sum of 5 and 2 should be 10");
tests.isNotANumber(multiply("dog", 3), "Sum of dog and 3 should be Nan");



//#endregion