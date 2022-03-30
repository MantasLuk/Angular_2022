const output = document.getElementById("answer");
const btn = document.getElementById("convert");
let cm = <HTMLInputElement> document.getElementById("cm");


const inches = (cm:number) => {
    return cm*0.39
}

const convert = () => {
    let yourCm = +cm.value;
    if(output != null){
        output.innerHTML = "" + inches(yourCm);
    }
};

if(btn != null){ 
    btn.onclick = convert;
};