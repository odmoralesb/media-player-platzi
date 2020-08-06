console.log("Hello, TypeScript");


function add(a: number, b: number):number {
    return a + b;
}

const sum = add(7, 5)

console.log("Suma de elementos: ", sum)


let muted: boolean = true;

muted = false;


let people : string[] = [];
people = ["David", "Maria"]


let numorstr: Array<string|number>
numorstr = ["David", 2]


enum Color {Rojo = "Rojo", Verde = "Verde", Azul = "Azul"}


console.log(`Mi color fsvorito es el ${Color.Rojo}`)


// Interfaces

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect: Rectangulo = {
    ancho: 3, alto: 5, color: Color.Rojo
}


function areaRectangulo(r: Rectangulo): number {
    return r.alto * r.ancho
}


console.log("El area del rectangulo es ", areaRectangulo(rect));

console.log(rect.toString())


rect.toString = function() {
    return this.color ? `El rectangulo es de color ${this.color}` :  `Èl rectangulo no tiene color`;
}


console.log(rect.toString())








