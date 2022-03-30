// let suma = (x:number, y:number) => {
//     let res:number;
//     res = x+y;
//     return res;
// }
// console.log(suma(5,8));
var bdd = function (n1, n2) {
    var res;
    for (var i = n1; i >= 1; i--) {
        if (n1 % i == 0 && n2 % i == 0) {
            res = i;
            return res;
        }
        ;
    }
    ;
};
console.log(bdd(15, 10));
var apsilankymas = function (lankytojas) {
    console.log("Apsilanke " + lankytojas.vardas + ", jo amzius: " + lankytojas.amzius + ", tel. nr.: " + lankytojas.telefonas);
};
var lankytojas = {
    vardas: "Jonas",
    amzius: 21,
    telefonas: "865433232"
};
apsilankymas(lankytojas);
;
var distance = function (p) {
    return Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2));
};
var distantPoint = {
    x: 5,
    y: 12
};
console.log(distance(distantPoint));
