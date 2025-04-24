// funciones flecha 
const saludar = ()=> {
    console.log("hola desde arrow function");
}
saludar();
saludar();
saludar();
saludar();
const cuadrado1 = (num) => {
    console.log("cuadrado de",num, "igual a", num * num);
}
cuadrado1(6);

const cuadrado2 = (num) => {
    console.log("cuadrado de",num, "igual a", num * num);
}
cuadrado2(6);

//retorno directo
const cuadrado = x  => x * x;
console.log ("5x5", cuadrado(5));