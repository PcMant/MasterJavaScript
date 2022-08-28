var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Módulos:
Los módulos, los exports y los imports. Nos permite modulizar la aplicación de tal forma
que organizamos muchisimo mejor el código.
Sirve para organizar la funcionalidad del programa por diferentes ficheros, diferentes funcionalidades
y fucerebtes clases, para optimizar mucho el código, para organizar, para abstraer y tener mayor moduladidad

Export: Es para exportar
Import: Es para importar las clases / ficheros
*/
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(titulo) {
            this.titulo = titulo;
            alert(titulo);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(titulo) {
            this.titulo = titulo;
            alert('Tienda de tecnología: ' + titulo);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
/*
Los decoradores son una nueva funcionalidad que podemos utilizar tanto como dentro de Angular como de TypeScript,
como también próximamente en JavaScript con los nuevos estandares de ECMAScript.
Lo que nos permite básicamente un decorador es mediante puedes definir antes de una clase una intrucción un @ lo que sea,
cuando utilizamos un decorador de una clase lo que hacemos es añadirle unos metadatos a una clase, hacer una copia de la clase
a la que le estamos aplicando el decorador y mediante unos metadatos que son unos argumentos / parámetos que le pasamos,
los decoradores lo que hacemos es modificar la clase que creamos originalmente y añadiendo más información o quitarla,
añadirle una funcionalidad y que luego ese decorador nos devuelva la clase que estamos decorado nos la devuelva con la nueva información
o funcionalidad que ha añadido ese decorador.
*/
function arranque(lanzar) {
    return function (target) {
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
var Informatica = Tienda.Informatica;
var cargar_ifomatica = new Informatica('supertienda');
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa = __decorate([
        arranque('Lanzamiento del curso de JS')
    ], Programa);
    return Programa;
}());
// Probando el método del decorador @arranque
var programa = new Programa();
programa.lanzamiento();
/*
El concepto de la herencia en la programación orientada a objetos es un mecanismo muy básico por el cual
las clases hijas heredan  de una clase padre sus propiedades y métodos.
*/
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorVideo.prototype.getAllData = function () {
        return this.getNombre() + ' - ' + this.getVersion() + ' - ' + this.getTimeline();
    };
    return EditorVideo;
}(Programa));
var editor = new EditorVideo();
editor.setNombre('Camtasia Studio');
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());
// Logica del formulario
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + '</li>';
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
