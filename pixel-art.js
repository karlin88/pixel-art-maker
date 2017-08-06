
for (i = 1; i <= 40; i ++ ) {
    var row = document.createElement("div");
    row.className = 'row';
    row.id = "row" + i;

    document.querySelector(".canvas").appendChild(row);

    for (l = 1; l <= 80; l ++) {
        var pixel = document.createElement("div");
        pixel.className = 'griditem';
        pixel.id = "pixel" + l;

        document.getElementById("row"+i).appendChild(pixel);

    }
}
var colorDiv = document.getElementsByClassName("paletteColor");
for (c = 0; c < colorDiv.length; c ++) {
    colorDiv[c].addEventListener('click', function(event) {
        var currentColor = this.style.backgroundColor;
        document.querySelector(".currentColor").style.backgroundColor = currentColor;
    });
}
var ediv = document.getElementsByClassName("griditem");
for (e = 0; e < ediv.length; e ++) {
    ediv[e].addEventListener('click', function(event) {
        this.style.backgroundColor = document.querySelector(".currentColor").style.backgroundColor;
        console.log(currentColor);
        this.style.border = "0px";
    });
}