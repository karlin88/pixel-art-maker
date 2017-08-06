
for (i = 1; i <= 50; i ++ ) {
    var row = document.createElement("div");
    row.className = 'row';
    row.id = "row" + i;
    // row.style.overflow = "hidden";
    // row.style.width = "10px";
    // row.style.margin = "-1px";
    // row.style.border = "1px solid gainsboro";

    document.querySelector(".canvas").appendChild(row);
    for (l = 1; l <= 100; l ++) {
        var pixel = document.createElement("div");
        pixel.className = 'griditem';
        pixel.id = "pixel" + l;
        // pixel.style.display = "table-cell";
        // pixel.style.border = "1px solid gainsboro";
        // pixel.style.height = "10px";
        // pixel.style.width = "10px";
        // pixel.style.margin = "-1px";

        document.getElementById("row"+i).appendChild(pixel);
    }
}


// function show_value2() {
// // get Value of the slider and push value to UI
//     var slider = document.getElementById("slider").value;
//     document.getElementById("showslider").innerHTML = slider;

// // get value of the character
//     var char = document.getElementById("character").value;

// // clear div to prep for new pyramid and draw new pyramid
//     document.getElementById("pyramid").innerHTML = "";
//     printPyramid(slider,char);

//     function printPyramid(height,char) {
//         var output = "";
//         for (i = 1;i <= height; i++) {
//             output = output + "\xa0".repeat(height-i);
//             output = output + char.repeat(i+1);
//             var para = document.createElement("p");
//             var node = document.createTextNode(output)
//             para.appendChild(node);
//             document.getElementById("pyramid").appendChild(para);
//             output = "";
//         }
//     }
// }
