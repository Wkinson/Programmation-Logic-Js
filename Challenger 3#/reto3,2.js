function isValid(letter) {
    let obj = letter.match(/\(([^)]+)\)/g);
    if (obj === null) return false
    let regexp = /\([a-zA-Z]+\)/;

    for (let i = 0; i < obj.length; i++) {
        let gift = obj[i];
        console.log(gift);

        if(gift.includes("[") || gift.includes("{")) return false;     
        if(regexp.test(gift)) return false;

        return true;
    }
}

let str = "(muñeca) consola bici";
console.log(isValid(str));