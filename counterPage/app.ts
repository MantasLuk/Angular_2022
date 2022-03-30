const output = document.getElementById("ats");
const btn = document.getElementById("skaic");
let point_X = <HTMLInputElement> document.getElementById("x"); // du variantai tipo pakeitimo
let point_Y = document.getElementById("y") as HTMLInputElement;


interface Point {
    x: number,
    y: number,
};

const distance = (p: Point) => {
    return Math.sqrt(p.x**2+p.y**2);
};

const distantPoint: Point = {
    x: 5,
    y: 12,
};

const count = () => {
    distantPoint.x = +point_X.value;
    distantPoint.y = +point_Y.value;
    if(output != null){
        output.innerHTML = `Atstumas iki tasko (${distantPoint.x};${distantPoint.y}) yra ` + distance(distantPoint);
    }
};

if(btn != null){ 
    btn.onclick = count;
};



