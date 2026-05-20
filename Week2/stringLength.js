function lastWordLength(str) {

    str = str.trim();

    let words = str.split(" ");

    let lastWord = words[words.length - 1];

    return lastWord.length;
}
let input2 = " fly me to the moon ";

console.log("Input:", input2);

console.log("Output:", lastWordLength(input2));