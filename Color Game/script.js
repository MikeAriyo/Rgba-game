
var numSquares = 6;
// function to generate random colors
var colors = generateRandomColors(numSquares);
// some selectors
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // refer below for function makeup
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons= document.querySelectorAll(".mode");

for(var i =0; i<modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected")
        modeButtons[1].classList.remove("selected")
        this.classList.add("selected");
        if(this.textContent==="Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();

        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes
    })
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    //change colors of squares
    for(var i =0; i<squares.length; i++){
      if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      } else{
        squares[i].style.display = "none";
      }
      
       
    }
    h1.style.backgroundColor="steelblue";
}

/* easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i =0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    };
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    };
}); */

resetButton.addEventListener("click",function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    //change colors of squares
    for(var i =0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent = "";
});

colorDisplay.textContent=pickedColor;
//loopp through each square and add colors to them
for(var i=0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click",function(){
        //grab color of the clicked square
        var clickedColor = this.style.backgroundColor
        //compare clicked color to picked color
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Correct!"
            messageDisplay.style.color = "black"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.style.color = "black"

            messageDisplay.textContent = "Try Again!"
        }
    })
}

// function to change all other colors to the picked color if correct
function changeColors(color){
    //loop through all squares
    for(var i =0; i<squares.length; i++){
    // change colors to match given color
    squares[i].style.backgroundColor = color;
    }
}

// function to generate random colors from the colors array
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generate random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for (var i=0; i<num; i++){
       //get random colors and push into arr
        arr.push(randomColor());
        


    }
    //return that array
    return arr;
}

function randomColor (){
    //pick a red from 0-255
     var r = Math.floor(Math.random()* 256);  // so as to include 255
    //pick a blue from 0-255
    var g = Math.floor(Math.random()* 256);
    //pick a green from 0-255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

