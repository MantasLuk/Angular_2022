var Zmogus = /** @class */ (function () {
    function Zmogus(vardas, amzius, email) {
        this.vardas = vardas;
        this.amzius = amzius;
        this.email = email;
    }
    Zmogus.prototype.isvedimas = function () {
        console.log("As esu: " + this.vardas + " man " + this.amzius);
    };
    Zmogus.prototype.setAmzius = function (amzius) {
        if (amzius < 18)
            throw new Error('Per jaunas/a esi');
        this.amzius = amzius;
    };
    Zmogus.prototype.getAmzius = function () {
        return this.amzius;
    };
    return Zmogus;
}());
var jonas = new Zmogus('Jonas', 32, "jonas@email.com");
var petras = new Zmogus("Petras", 22);
petras.setAmzius(25);
console.log(petras.getAmzius());
jonas.isvedimas();
petras.isvedimas();
