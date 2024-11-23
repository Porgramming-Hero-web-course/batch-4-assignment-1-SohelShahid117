"use strict";
{
    /*
    Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    // Sample Input:
    countWordOccurrences("I love typescript", "typescript");

    // Sample Output:
    1;
    */
    function countWordOccurrences(a, b) {
        let x = a.split(" ");
        // console.log(x)
        // console.log(x.length)
        let count = 0;
        for (let i = 0; i < x.length; i++) {
            // console.log(x[i])
            if (x[i].toLowerCase() == b.toLowerCase()) {
                // console.log(x[i]);
                count++;
            }
        }
        return count;
    }
    // countWordOccurrences("I love typescript", "typescript");
    console.log(countWordOccurrences("I love Typescript", "typescript"));
    // console.log(countWordOccurrences("I love typescript typescript", "typescript"));
}
