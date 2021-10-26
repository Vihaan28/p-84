var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var img_width = 300;
var img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploading; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
		{
          aplhabetkey();
            document.getElementById("d1").innerHTML="You Pressed Aphabet Key";
              console.log("alphabet Key")

		}

		else if(keyPressed>=48 && keyPressed<=57) {

numberkey();
document.getElementById("d1").innerHTML="You Pressed Number Key";
              console.log("number Key")


		}

		else if(keyPressed>=37 && keyPressed<=40) {

			arrowkey();
			document.getElementById("d1").innerHTML="You Pressed Arrow Key";
						  console.log("arrow Key")
			
			
					}
					else if((keyPressed==17) || (keyPressed==18 || keyPressed==27)) {

						specialkey();
						document.getElementById("d1").innerHTML="You Pressed Special Key";
									  console.log("special Key")
						
						
								}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png"
	add();
}
function numberkey()
{
	img_image="numkey.png"
	add();
}
function arrowkey()
{
	img_image="Arrkey.png"
	add();
}
function specialkey()
{
	img_image="spkey.png"
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
