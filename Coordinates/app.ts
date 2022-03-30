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

class Point {
    constructor(
        private _x?:number,
        private _y?:number
    )
    {

    }
    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }

    set x(x:number){
        this._x=x;
    }
    set y(y:number){
        this._y=y;
    }

    public distanceFromOrigin():number{
        return Math.sqrt(this._x**2+this._y**2);
    }

    public translate(dx:number, dy:number):void{
            this._x+=dx, 
            this._y+=dy;
    }

    public toString():string{
        return `[${this._x};${this._y}]`;
    }

    public distance(p:Point):number{
        return Math.sqrt((this._x-p.x)**2 + (this._y-p.y)**2);
    }
}

const sk1=new Point(3,3);
const sk2=new Point(1,1);
console.log(sk1.distance(sk2));

sk1.translate(1,5);
console.log(sk1.toString());
console.log(sk2.distanceFromOrigin());




