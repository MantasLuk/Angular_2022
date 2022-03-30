var output = document.getElementById("ats");
var btn = document.getElementById("skaic");
var point_X = document.getElementById("x"); // du variantai tipo pakeitimo
var point_Y = document.getElementById("y");
;
var distance = function (p) {
    return Math.sqrt(Math.pow(p.x, 2) + Math.pow(p.y, 2));
};
var distantPoint = {
    x: 5,
    y: 12
};
var count = function () {
    distantPoint.x = +point_X.value;
    distantPoint.y = +point_Y.value;
    if (output != null) {
        output.innerHTML = "Atstumas iki tasko (".concat(distantPoint.x, ";").concat(distantPoint.y, ") yra ") + distance(distantPoint);
    }
};
if (btn != null) {
    btn.onclick = count;
}
;
