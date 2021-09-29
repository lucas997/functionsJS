function numeroPar(number) {
    for(let i = number; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

numeroPar(10);
numeroPar(20);
numeroPar(100);