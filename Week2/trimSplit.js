function lengthOfLastWord(str) {
    str = str.trim();
    let words = str.split(" ");
    let lastWord = words[words.length - 1];

    let length = lastWord.length;
    return length;
}

let input = " fly me to the moon ";

let result = lengthOfLastWord(input);

console.log("Output:", result);