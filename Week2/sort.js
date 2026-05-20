function isAnagram(str1, str2) {

    str1 = str1.replace(/\s/g, "").toLowerCase();

    str2 = str2.replace(/\s/g, "").toLowerCase();

    let sortedStr1 =
        str1.split("").sort().join("");

    let sortedStr2 =
        str2.split("").sort().join("");

    let result = sortedStr1 === sortedStr2;

    return result;
}

console.log(isAnagram("listen", "silent"));

console.log(isAnagram("hello", "world"));