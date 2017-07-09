var numOfSquares=0;
var pickedColor;
var colors = [];
var hits=1;
var games=0;
var isMatched=false;
var squares=document.querySelectorAll(".square");

alert("Please  click either Easy or Hard  mode to start the Game ");
var h1=document.querySelector("h1");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var modeButtons=document.querySelectorAll(".mode");
var noOfHits=document.querySelector("#score");
var noOfGames=document.querySelector("#games");


init();
function init(){
 
    setUpModeButton();
    setUpSquares();
        colorReset();


}
reset.addEventListener("click",function()
    {
        if(reset.textContent=="Play Again?")
        {
            noOfHits.textContent=0;
            noOfGames.textContent=0;
            hits=1;
            colorReset();
        }
        else
        colorReset();
        
    });
function setUpModeButton()
{
    for (var i=0; i<modeButtons.length;i++)
        {
             modeButtons[i].addEventListener("click",function(){
                noOfGames.textContent="0";


             modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
             this.textContent==="Easy" ? numOfSquares=3:numOfSquares=6;
             this.textContent==="Easy" ?  games=0: games=0;
             colorReset();
            });
        }

}
function setUpSquares()
{
     for(var i=0;i<squares.length;i++)
      {
         squares[i].addEventListener("click",function(){
            var clickedColor=this.style.background;
                if(clickedColor === pickedColor)
                {
                    if(!isMatched)
                    {
                   noOfHits.textContent=hits++;
                    isMatched=true;
                   }   
                   
                    message.textContent="Correct :-)";
                    reset.textContent="Play Again?"

                    for(var i=0;i<squares.length;i++)
                    {
                        squares[i].style.background=clickedColor;
                    }
                    h1.style.background=clickedColor;
                    
                }
            else{
                 noOfHits.textContent=hits++;  
                this.style.background="#232323";
                message.textContent="try Again";
            }
            });
        }   
}
function colorReset()
{  

 colors=generateRandomColors(numOfSquares);
  noOfGames.textContent=games++;

    for(var i=0;i<squares.length;i++)
    {    
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.background=colors[i];

        }
        else
        {

        squares[i].style.display="none";
        }
    }
    pickedColor=pickColor();
    if(numOfSquares===0)
    {
    colorDisplay.textContent="RGB"
    }
    else
    {
        colorDisplay.textContent=pickedColor;
    }
    h1.style.background="steelblue";
    message.textContent=" ";
      reset.textContent="New Colors"

}

 function pickColor(numOfSquares)
{   
             
     var random=Math.floor(Math.random()*colors. length);
        return colors[random];
    

 }
function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColors());
    }
    return arr;
}
function randomColors()
{
    var redRandom=Math.floor(Math.random()*256);
    var greenRandom=Math.floor(Math.random()*256);
    var blueRandom=Math.floor(Math.random()*256);
    return "rgb(" + redRandom+", "+greenRandom +", "+blueRandom+")";
}    

