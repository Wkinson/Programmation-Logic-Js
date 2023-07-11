function createXmasTree(height) {
    if(!height >= 1 && !height <= 100) return "";

    let tree = "";
    for (let i = 0; i <= height -1; i++) {
        let val = height - i - 1;
        console.log(val)
        let spaces = "_".repeat(val);
        let icons = "*".repeat(i * 2 + 1);
        tree += spaces + icons + spaces +"\n";
    };
    
    var trunkSpaces = "_".repeat(height - 1)
    tree += trunkSpaces + "#" + trunkSpaces + "\n";
    tree += trunkSpaces + "#" + trunkSpaces + "\n";
    return tree;
}

createXmasTree(10 .3);