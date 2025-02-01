import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name){
     if (typeof name !== "string") {
    return null;
    
  }
    let cutName = name.trim();

     if (cutName == "") {
    return "";
     } else if (cutName.includes("[`!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~]/")) {
    return null;
     }
     
    const splitWords = cutName.split(" ");
     
  for (let i = 0; i < splitWords.length; i++) {
    splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substr(1);
  }
  return splitWords.join(" ");
}
//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("FormatName function");

tests.isEqual(formatName("glory and honor"), "Glory And Honor", "formatted version of glory and honor should be Glory And Honor");
tests.isEqual(formatName("@$"), "@$", "formatted version of @$ should be null");
tests.isEqual(formatName(74), null, "formatted version of 74 should be null");
tests.isEqual(formatName("   heresy"), "Heresy", "formatted version of   heresy should be Heresy");
tests.isEqual(formatName("     "), "", "formatted version of       should be ");


//#endregion