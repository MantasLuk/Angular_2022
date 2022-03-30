class Zmogus {

    constructor(
        private vardas:string, 
        private amzius:number, 
        private email?:string){
    }

    public isvedimas() {
        console.log("As esu: " + this.vardas+" man "+this.amzius);
    }

    public setAmzius(amzius:number){
        if(amzius < 18) throw new Error('Per jaunas/a esi');
        this.amzius=amzius;
    }

    public getAmzius(){
        return this.amzius;
    }
}

const jonas =new Zmogus('Jonas', 32, "jonas@email.com");
const petras =new Zmogus("Petras", 22);

petras.setAmzius(25);
console.log(petras.getAmzius());


jonas.isvedimas();
petras.isvedimas();





