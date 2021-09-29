function tamanhoDoTexto(caractere) {


    if(caractere.length > 10) {
        return "texto muito longo";
    } else {
        return "textto dentro do limite";
    }
}

console.log(tamanhoDoTexto("casa"));
console.log(tamanhoDoTexto("paralelepípedo"));
console.log(tamanhoDoTexto("javascript"));
console.log(tamanhoDoTexto("testando a função"));