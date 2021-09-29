function tipoDeDado(dado) {
    if(typeof dado === "string") {
        return "esse dado é uma string";

    } else if(typeof dado === "number") {
        return "esse dado é um number";

    } else if(typeof dado === "boolean") {
        return "esse dado é um boolean";
    }
}

console.log(tipoDeDado(10));
console.log(tipoDeDado(true));
console.log(tipoDeDado("Olá mundo"));
console.log(tipoDeDado("10"));
console.log(tipoDeDado(23.66));
console.log(tipoDeDado(false));
console.log(tipoDeDado(false));
console.log(tipoDeDado("Meu primeiro emprego como dev júnior"));