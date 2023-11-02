function repeatMyself(string) {

    //return `${string}!${string}!!${string}!!!${string}!!!!${string}!!!!!`

    let result = "";
    for (let i = 1; i <= 5; i++) {
      result += string;
      result += "!".repeat(i);
    }
    return result;


}

console.log(repeatMyself("hello"))
module.exports = repeatMyself