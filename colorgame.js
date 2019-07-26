var nsquares=6;
var colors=generatecolor(nsquares);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var resetbtn=document.querySelector("#reset");
var mode=document.querySelectorAll(".mode");
for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
	mode[0].classList.remove("selected")
	mode[1].classList.remove("selected")
	this.classList.add("selected");
	if(this.textContent==="Easy")
	{
		nsquares=3;
	}
	else{
		nsquares=6;
	}
	reset()
	//no ofsquares 
	//pick new colors
	//pick a new pcolor
	//update page to reflect new colors
	})
}

function reset(){
	colors=generatecolor(nsquares);
	//pick new random color
	pcolor=pickcolor();
	//change color display to match picked color
	colordisplay.textContent=pcolor;

	
	resetbtn.textContent="New Colors"
	message.textContent=""
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.display="block"
		squares[i].style.backgroundColor=colors[i];}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";	
}

// easy.addEventListener("click",function(){
// 	easy.classList.add("selected")
// 	hard.classList.remove("selected")
// 	nsquares=3
// 	colors=generatecolor(nsquares);
// 	pcolor=pickcolor();
// 	colordisplay.textContent=pcolor;
// 	for(var i=0;i< squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}
// 		else{
// 		squares[i].style.display="none";	
// 		}
// 	}
// })
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected")
// 	nsquares=6
// 	colors=generatecolor(nsquares);
// 	pcolor=pickcolor();
// 	colordisplay.textContent=pcolor;
// 	for(var i=0;i< squares.length;i++){
		
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";	
		
// 	}
// })
resetbtn.addEventListener("click",function(){
	//generate new color
	reset();
})
for(var i=0;i<squares.length;i++)
{
	//add initila colors to squares
	squares[i].style.backgroundColor=colors[i]; 
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of picked square
		var ccolor=this.style.backgroundColor;
		//compare color to picked color
		if(ccolor===pcolor){
			message.textContent="Correct";
			changecolor(ccolor);
			h1.style.backgroundColor=ccolor;
			resetbtn.textContent="Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent="Try Again"
		}
	});
}
var pcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pcolor;
function changecolor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickcolor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generatecolor(num){
var arr=[];
for(var i=0;i<num;i++){
arr.push(randomcolor());
}
return arr;
}
function randomcolor(){
	//pick red from 0- 255
	var red=Math.floor(Math.random()*256)
	//pick green from 0- 255
	var green=Math.floor(Math.random()*256)
	//pick blue from 0- 255
	var blue=Math.floor(Math.random()*256)
	return "rgb(" + red +", " + green +", " + blue +")";
}