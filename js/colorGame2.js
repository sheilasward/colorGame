var num = 6;
var colors = generateRandomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    num = 3;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    num = 6;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

reset.addEventListener("click", function() {
    //Generate all new colors array
    colors = generateRandomColors(num);
    //Pick a new random color from array
    pickedColor = pickColor();
    //Change heading to match pickedColor
    colorDisplay.textContent = pickedColor;
    //Change background of heading to dark gray
    h1.style.backgroundColor = "steelblue";
    //Change button display to "New Colors"
    reset.textContent = "New Colors";
    //Change message display to blank
    messageDisplay.textContent = "";
    //Change colors of squares
    for (var i=0; i<squares.length; i++) {
        //Change colors of squares
        squares[i].style.backgroundColor = colors[i];
    } 
});

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++) {
    //Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //Add click listeners to squares
    squares[i].addEventListener("click", function() {
        //Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            reset.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //Loop through all squares and change colors
    for (var i=0; i<squares.length; i++) {
        //Change each square to match pickedColor
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //Choose the index of the color we want to pick
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i=0; i<num; i++) {
        //Push random color into arr
        arr.push(randomColor());
    }
     //Return the array
    return arr;
}

function randomColor() {
    //Pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}