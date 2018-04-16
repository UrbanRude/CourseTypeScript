console.log("Hello.. word with TypeScript putitos");
var myString:string = "String";
console.log(myString);

// tipo de datos
var edad:number = 24;
var altura:Number = new Number(1.80);

var nombre:string = "Urbano Ceron";
var apellido:String =new String ("Ceron");

console.log("Mi nombre es "+nombre+" y mi edad es "+edad);
//var p:Persona = new Persona();

//funciones:tipoDeRetorno
function sumar(num:number,numII:number):number{
    return num+numII;
}

var Sumar = function(num:number,numII:number):number{
    return num+numII;
};

var sumarNumeros = (num:number,numII:number) => {return num+numII};





