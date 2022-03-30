var output = document.getElementById("answer");
var btn = document.getElementById("convert");
var cm = document.getElementById("cm");
var inches = function (cm) {
    return cm * 0.39;
};
var convert = function () {
    var yourCm = +cm.value;
    if (output != null) {
        output.innerHTML = "" + inches(yourCm);
    }
};
if (btn != null) {
    btn.onclick = convert;
}
;
