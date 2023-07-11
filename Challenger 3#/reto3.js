function isValid(letter) {
    let words = letter.split(" ");
    let gift = "";

    words.forEach(e => {
        console.log(e);
        if (e.includes("(")){
            gift = e;
        };
    });

    if(gift.search(/\(([^)]+)\)/g) != -1 && !gift.search(/\([^a-zA-Z]+\)/g) != -1) {
        console.log(true);
        return true;

    } else {
        console.log(false);
        return false;
    }

    console.log(gift);
}

let str = "(muñeca) consola bici";
isValid(str);