function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"