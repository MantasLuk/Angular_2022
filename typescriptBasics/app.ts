// let suma = (x:number, y:number) => {
//     let res:number;
//     res = x+y;
//     return res;
// }

// console.log(suma(5,8));


let bdd = (n1:number, n2:number) => {
    let res:number;

    for (let i = n1; i >=1; i--){
        if(n1%i == 0 && n2%i == 0){
            res = i;
            return res;
        };
    };
};
console.log(bdd(15,10));


//----------------------------------------------

interface Zmogus {
    vardas: string,
    amzius: number,
    telefonas?: string,
}


let apsilankymas = (lankytojas: Zmogus) => {
    console.log("Apsilanke "+lankytojas.vardas+", jo amzius: "+lankytojas.amzius+", tel. nr.: "+lankytojas.telefonas);
}

let lankytojas: Zmogus={
    vardas:"Jonas",
    amzius: 21,
    telefonas: "865433232",
}

apsilankymas(lankytojas);


//---------------------

interface Point {
    x: number,
    y: number,
};


const distance = (p: Point) => {
    return Math.sqrt(p.x**2+p.y**2);
};

let distantPoint: Point = {
    x: 5,
    y: 12,
};

console.log(distance(distantPoint));

