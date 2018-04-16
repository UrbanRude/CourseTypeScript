var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    Telefono.prototype.imprimir = function () {
        return true;
    };
    return Telefono;
}());
var Computadora = /** @class */ (function () {
    function Computadora(nombre) {
        this._nombre = nombre;
    }
    Computadora.prototype.cortarPapel = function () {
        return false;
        //throw new Error("Method not implemented.");
    };
    Computadora.prototype.imprimir = function () {
        return true;
    };
    return Computadora;
}());
var Pc = /** @class */ (function (_super) {
    __extends(Pc, _super);
    function Pc(nombre, so) {
        var _this = _super.call(this, "Urbano") || this;
        _this._so = so;
        return _this;
    }
    return Pc;
}(Computadora));
var pc = new Pc("YoSctipy", "Windows");
alert(pc.cortarPapel());
//var imp:Impresora = {imprimir:function():boolean{return true;}};
//var impII:Impresora = new Computadora();
