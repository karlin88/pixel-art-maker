//Creates a pixel drawing canvas with a div grid
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

//Stores the palette color and pushes to UI to display the palette color
var colorDiv = document.getElementsByClassName("paletteColor");
for (c = 0; c < colorDiv.length; c ++) {
    colorDiv[c].addEventListener('click', function(event) {
        var currentColor = this.style.backgroundColor;
        document.querySelector(".currentColor").style.backgroundColor = currentColor;
    });
}

//Update current color from a change in the Custom Color input
function updateCurrentColor () {
    var currentColor = document.querySelector("input").value;
    console.log(currentColor);
    document.querySelector(".currentColor").style.backgroundColor = currentColor;
}

//Creates click event listener to apply palette color to the pixel
// var ediv = document.getElementsByClassName("griditem");
// for (e = 0; e < ediv.length; e ++) {
//     ediv[e].addEventListener('click', updateColor);
// }

//Applies color based on mouse behavior (brush like)
var ediv = document.getElementsByClassName("griditem");
var isMouseDown = false;
for (e = 0; e < ediv.length; e ++) {
    ediv[e].addEventListener('mousedown', function(){
        isMouseDown = true;
    });
    ediv[e].addEventListener('mousemove', function () {
        if (isMouseDown) {
            currentColor = document.querySelector(".currentColor").style.backgroundColor;
            this.style.borderColor = currentColor;
            this.style.backgroundColor = currentColor;
        }
    });
    ediv[e].addEventListener('mouseup', function () {
        isMouseDown = false;
    });
}


