function maioridade(idade) {
    if(idade >= 18) {
        return "pode dirigir";
    } else {
        return "não pode dirigir";
    }
}

console.log(maioridade(30));
console.log(maioridade(17));
console.log(maioridade(14));
console.log(maioridade(26));