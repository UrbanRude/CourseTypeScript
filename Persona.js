var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.setName = function (name) {
        this._name = name;
    };
    Persona.prototype.getName = function () {
        return this._name;
    };
    return Persona;
}());
var p = new Persona();
p.setName("Urbano Ceron");
alert(p.getName());
