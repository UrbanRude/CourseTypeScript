class Persona{
    private _name:string;

    public setName(name:string){
        this._name = name;
    }

    public getName():string{
        return this._name;
    }

}

var p:Persona = new Persona();
p.setName("Urbano Ceron");
alert(p.getName());