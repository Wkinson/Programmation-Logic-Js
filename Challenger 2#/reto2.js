const carta = 'bici coche balón _playstation bici coche peluche';

function listGifts(letter) {
    let words = letter.split(" ");
    let objlist = {};
    console.log(words)
    for (var i = 0; i < words.length; i++) {
        let str = words[i];

        if(!str.includes('_')){
            if (!objlist.hasOwnProperty(str)){
                objlist[str] = 1;
            } else {
                objlist[str] += 1;
            }
        };  
        console.log(objlist);
        console.log(objlist[str])
    }

    return objlist;
}

listGifts(carta);

