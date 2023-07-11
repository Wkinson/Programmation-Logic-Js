export default function contarOvejas(ovejas) {
    let result = [];
    
    for(let i = 0; i < ovejas.length; i++) {
        let item = ovejas[i];
        if(item.name.toLowerCase().includes("na") && item.color == "rojo"){
            result.push(item);
        };
    };
    return result;
}