// <------------------Create the canvas-------------------->

var canvas = document.createElement('canvas');

	canvas.width = 800;
	canvas.height = 620;
	canvas.style.border = "5px solid black";
	canvas.style.backgroundColor = "lightgray";
	//canvas.style.backgroundImage = "url('http://onenprendsoin.recyc-quebec.gouv.qc.ca/images/paints/paint-drop.png')";
	//canvas.style.backgroundRepeat = "no-repeat"
	canvas.style.borderRadius = "10px";
	canvas.style.position = "relative";

var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

// <------------------Create the inner canvas-------------------->

var canv = document.createElement('canvas');

	canv.width = 670;
	canv.height = 480;
	canv.style.border = "5px solid black";
	canv.style.backgroundColor = "white";
	canv.style.backgroundImage = "url('https://openclipart.org/image/2400px/svg_to_png/213809/paintdrip.png')";
	canv.style.backgroundSize = "cover";
	canv.style.borderRadius = "10px";
	canv.style.position = "absolute";
	canv.style.marginLeft = "-710px";
	canv.style.marginTop = "75px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(canv);

canv.setAttribute("id", "canv");
document.getElementById("canv").addEventListener("mousemove",function(){
	showCoords(event);
	innerCanvas(event);
	});

var welcome = document.createElement("img");
welcome.src = "http://www.freeiconspng.com/uploads/welcome-png-hd-18.png";
	

	welcome.style.width = "500px";
	welcome.style.height = "80px";
	welcome.style.position = "absolute";
	welcome.style.marginLeft = "-430px";
	welcome.style.marginTop = "555px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(welcome);

// <------------------Create the color picker-------------------->

var colorpicker = document.createElement("colorpicker");
colorpicker.innerHTML = "PICK A COLOR";

	colorpicker.style.position = "absolute";
	colorpicker.style.marginLeft = "-700px";
	colorpicker.style.marginTop = "585px";
	colorpicker.style.fontSize = "20px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(colorpicker);

var input = document.createElement("input");
input.setAttribute("type", "color")

	input.style.position = "absolute";
	input.style.marginLeft = "-550px";
	input.style.marginTop = "585px";
	input.style.fontSize = "20px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(input);

input.setAttribute("id", "colors");
//document.getElementById("colors").addEventListener("click",myColor);

// <------------------Create the PENCIL button-------------------->

var pencil2 = document.createElement("img");
pencil2.src = "http://simpleicon.com/wp-content/uploads/pencil.png";
	

	pencil2.style.width = "50px";
	pencil2.style.height = "50px";
	pencil2.style.position = "absolute";
	pencil2.style.marginLeft = "-790px";
	pencil2.style.marginTop = "105px";
	pencil2.style.border = "2px solid grey";
	pencil2.style.backgroundColor = "#C0C0C0";
	pencil2.style.borderRadius = "10px";
	pencil2.style.padding = "5px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(pencil2);

pencil2.setAttribute("id", "pencil");
document.getElementById("pencil").addEventListener("click",function(){
	myPencil(event);
	});

// <------------------Create the TEXT button-------------------->

var marker2 = document.createElement("img");
marker2.src = "http://www.freeiconspng.com/uploads/paint-brush-icon-3.png";
	marker2.setAttribute("id", "text");

	marker2.style.width = "50px";
	marker2.style.height = "50px";
	marker2.style.position = "absolute";
	marker2.style.marginLeft = "-790px";
	marker2.style.marginTop = "205px";
	marker2.style.border = "2px solid grey";
	marker2.style.backgroundColor = "#C0C0C0";
	marker2.style.borderRadius = "10px";
	marker2.style.padding = "5px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(marker2);

marker2.setAttribute("id", "marker");
document.getElementById("marker").addEventListener("click",function(){
	myMarker(event);
	});

// <------------------Create the ERASER button-------------------->

var eraser2 = document.createElement("img");
eraser2.src = "https://d30y9cdsu7xlg0.cloudfront.net/png/38402-200.png";
	eraser2.setAttribute("id", "eraser");

	eraser2.style.width = "50px";
	eraser2.style.height = "50px";
	eraser2.style.position = "absolute";
	eraser2.style.marginLeft = "-790px";
	eraser2.style.marginTop = "305px";
	eraser2.style.border = "2px solid grey";
	eraser2.style.backgroundColor = "#C0C0C0";
	eraser2.style.borderRadius = "10px";
	eraser2.style.padding = "5px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(eraser2);

eraser2.setAttribute("id", "eraser");
document.getElementById("eraser").addEventListener("click",function(){
	myEraser(event);
	});

// <------------------Create the TRASH button-------------------->

var trash2 = document.createElement("img");
trash2.src = "https://maxcdn.icons8.com/Share/icon/p1em/Editing//trash1600.png";

	trash2.style.width = "50px";
	trash2.style.height = "50px";
	trash2.style.position = "absolute";
	trash2.style.marginLeft = "-790px";
	trash2.style.marginTop = "405px";
	trash2.style.border = "2px solid grey";
	trash2.style.backgroundColor = "#C0C0C0";
	trash2.style.borderRadius = "10px";
	trash2.style.padding = "5px";

var body = document.getElementsByTagName("body")[0];
body.appendChild(trash2);

trash2.setAttribute("id", "trash");
document.getElementById("trash").addEventListener("click",myTrash);


/////////////////////////////////FUNCTIONS//////////////////////////////////////
var x;
var y;
var size =10;

// <------------------Create the Coordinates function-------------------->

function showCoords(event){
var rect = canv.getBoundingClientRect();
 x = event.clientX - rect.left;
 y = event.clientY - rect.top;
	}

var ctx = canv.getContext("2d");

// <------------------Create the Drawing functions-------------------->

function innerCanvas(event){
	console.log(x+", " +y);
	if(event.buttons != 1)return;
	ctx.fillStyle = inputColors.value;
	ctx.fillRect(x, y, size, size);
	}

var inputColors = document.getElementById("colors");

function myPencil(event){
	inputColors.value = "#000000";
	size=10;
}

function myMarker(event){
	size=40;
}

function myEraser(event){
	inputColors.value = "#ffffff";
	size=40;
}

function myTrash(){
	ctx.clearRect(0, 0, canv.width, canv.height);
	inputColors.value = "#000000";
}