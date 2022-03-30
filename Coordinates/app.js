/*
1. Sukurkite klasę Point. Klasė bus skirta darbui su tašku dvimatėje erdvėje.
2. Sukurkite klasėje du skaitinius atributus: x ir y, padarykite kad jie būtų nematomi iš išorės (privatūs)
3. Sukurkite setter‘ius ir getter‘ius šiem abiem kintamiesiems
4. Sukurkite konstruktorių su dviem parametrais: x ir y (padarykite, jog šie parametrai būtų neprivalomi)
5. Sukurkite metodą distanceFromOrigin():number kuri grąžintų atstumą nuo koordinačių pradžios taško (0,0) iki taško saugomo objekte. Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).
6. Ištestuokite klasę sukurdami du objektus.

7. Sukurkite papildomą metodą translate(int dx, int dy):void kuris perstumtų tašką per dx ir dy vienetus (jei taškas buvo koordinatėse 5; 3 ir iškvietėme metodą su reikšmėmis 2;1 tuomet koordinatės turėtų tapti: 7;4
8. Sukurkite metodą toString kuris grąžintų taško vietą formatu [x;y]

9. Papildykite klasę metodu double distance(Point p) kuris grąžintų atstumą iki taško p nuo esamos taško. Taškas p paduodamas kaip kintamasis.
10. Ištestuokite naujai sukurtus metodus.
*/
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.distanceFromOrigin = function () {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    };
    Point.prototype.translate = function (dx, dy) {
        this._x += dx,
            this._y += dy;
    };
    Point.prototype.toString = function () {
        return "[".concat(this._x, ";").concat(this._y, "]");
    };
    Point.prototype.distance = function (p) {
        return Math.sqrt(Math.pow((this._x - p._x), 2) + Math.pow((this._y - p._y), 2));
    };
    return Point;
}());
var sk1 = new Point(3, 3);
var sk2 = new Point(1, 1);
console.log(sk1.distance(sk2));
sk1.translate(1, 5);
console.log(sk1.toString());
console.log(sk2.distanceFromOrigin());
