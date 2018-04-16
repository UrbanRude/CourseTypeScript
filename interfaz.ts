
interface Impresora{
    // Nombre de la implementacion, el signo es para implementar o no implementar
    imprimir?():boolean;
}

interface ImpresoraRecibos extends Impresora{
    cortarPapel():boolean;
}

class Telefono implements Impresora{
    public imprimir():boolean{
        return true;
    }
}
class Computadora implements ImpresoraRecibos{

    private _id:string;
    private _nombre:string;

    constructor (nombre:string){
        this._nombre = nombre;
    }
    public cortarPapel(): boolean {
        return false;
        //throw new Error("Method not implemented.");
    }
    public imprimir():boolean{
        return true;
    }
}

class Pc extends Computadora{
    private _so:string;
    constructor (nombre:string,so:string){
        super("Urbano");
        this._so = so;
    }
}

var pc:Pc = new Pc("YoSctipy","Windows");
alert(pc.cortarPapel());

//var imp:Impresora = {imprimir:function():boolean{return true;}};
//var impII:Impresora = new Computadora();