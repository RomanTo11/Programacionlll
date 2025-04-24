function saludar (){
    console.log("hola");
}
saludar();
saludar();
saludar();

function suma(){
    console.log("suma 1 + 2 = ", 1 + 2);
}

function resta(){
    console.log("suma 10 - 2 = ", 10 - 2);
}
suma();
resta();
suma();
resta();
resta();

//funcion con paramatros y retorno

function dividir (a, b){
    return a / b;
}

let resultado = dividir(40, 8);
console.log("resultado: ", resultado);

//hacer una funcion que se le pase un numero e imprima  la tabla de multiplicar de ese numero

function multiplicar(a, b) {
    return a * b;
}

function tabla_multiplicar(numero) {
    console.log(`Tabla de multiplicar del:`, numero);
    for (let i = 1; i <= 10; i++) {
        let resultado = multiplicar(numero, i);
        console.log(numero," x ",i, " = ", resultado );
    }
}
tabla_multiplicar(5);

// 