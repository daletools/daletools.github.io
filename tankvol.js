//tk = [L/inch, top slope volume, top slope height, bottom slope volume, bottom slope height, total volume]
var tkA = [38.78,51,1,87,2,4676];			//1-6,16,18
var tkB = [75.70,114,0,720,16,10514];		//7-9,13-15
var tkC = [75.84,-245,3,245,3,10046];		//10,12
var tkD = [76.77,-225,3,225,3,11044];		//11,31
var tkE = [32.38,49,2,62,0,4709];		//17
var tkF = [31.5,0,0,52,2,2320];			//19
var tkG = [76.12,-185,3,185,3,10874];		//20-22,24-26
var tkH = [31.5,0,0,52,2,2320];			//27
var tkI = [0];					//28
var tkJ = [171.91,-565,5,565,5,24166];		//29,30
var tkK = [85.02,-170,4,335,0,11387];		//32-35
var tkL = [385.93,-1350,7,830,5,85540];		//36,37
var tkM = [219.08,-657,6,570,5,48745];		//38,39
var tkN = [77.71,0,0,160,0,7620];		//40
var tkO = [83.66,0,0,690,13,11440];		//41-44
var tkP = [68.72,295,0,205,0,5860];		//45-50
var tkQ = [17.54,0,0,0,0,1000];			//51,52
var tkR = [83.54,540,0,370,7,12460];		//53-58
var tkS = [87.54,0,0,860,0,16267];		//59
var tkT = [56.3,199,0,0,0,6980];		//60-65
var tkU = [76.77,115,3,662,15,10450];		//O1,O2
var tkV = [219.08,0,0,570,5,39347];		//O3,O4
var tkW = [265.9,0,0,0,0,60853];		//O5,O6
var tkX = [68.91,0,0,252,8,5420];		//R1,R2
var tkY = [37.17,0,0,0,0,1300];			//Stella Pan
var tkZ = [56.60,0,0,162,2,3388];		//Mixer
var tankname = [1,0,0,0,0,0];

function gettankdown() {
	var tk = document.getElementById("tank").value.toLowerCase();
	switch(tk) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '16':
		case '18':
		tankname = tkA.slice();
		break;

		case '7':
		case '8':
		case '9':
		case '13':
		case '14':
		case '15':
		tankname = tkB.slice();
		break;

		case '10':
		case '12':
		tankname = tkC.slice();
		break;

		case '11':
		case '31':
		tankname = tkD.slice();
		break;
		
		case '17':
		tankname = tkE.slice();
		break;
		
		case '19':
		tankname = tkF.slice();
		break;
		
		case '20':
		case '21':
		case '22':
		case '24':
		case '25':
		case '26':
		tankname = tkG.slice();
		break;
		
		case '27':
		tankname = tkH.slice();
		break;
		
		case '28':
		tankname = tkI.slice();
		break;
		
		case '29':
		case '30':
		tankname = tkJ.slice();
		break;
		
		case '32':
		case '33':
		case '34':
		case '35':
		tankname = tkK.slice();
		break;
		
		case '36':
		case '37':
		tankname = tkL.slice();
		break;
		
		case '38':
		case '39':
		tankname = tkM.slice();
		break;
		
		case '40':
		tankname = tkN.slice();
		break;
		
		case '41':
		case '42':
		case '43':
		case '44':
		tankname = tkO.slice();
		break;
		
		case '45':
		case '46':
		case '47':
		case '48':
		case '49':
		case '50':
		tankname = tkP.slice();
		break;
		
		case '51':
		case '52':
		tankname = tkQ.slice();
		break;
		
		case '53':
		case '54':
		case '55':
		case '56':
		case '57':
		case '58':
		tankname = tkR.slice();
		break;
		
		case '59':
		tankname = tkS.slice();
		break;
		
		case '60':
		case '61':
		case '62':
		case '63':
		case '64':
		case '65':
		tankname = tkT.slice();
		break;
		
		case 'o1':
		case 'o2':
		tankname = tkU.slice();
		break;
		
		case 'o3':
		case 'o4':
		tankname = tkV.slice();
		break;
		
		case 'o5':
		case 'o6':
		tankname = tkW.slice();
		break;
		
		case 'R1':
		case 'R2':
		tankname = tkX.slice();
		break;
		
		case 'stella pan':
		tankname = tkY.slice();
		break;
		
		case 'mixer':
		tankname = tkZ.slice();
		break;
	};
	calcdown();
}
function gettankup() {
	var tk = document.getElementById("tank").value.toLowerCase;
	switch(tk) {
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '16':
		case '18':
		tankname = tkA;
		break;

		case '7':
		case '8':
		case '9':
		case '13':
		case '14':
		case '15':
		tankname = tkB;
		break;

		case '10':
		case '12':
		tankname = tkC;
		break;

		case '11':
		case '31':
		tankname = tkD;
		break;
		
		case '17':
		tankname = tkE;
		break;
		
		case '19':
		tankname = tkF;
		break;
		
		case '20':
		case '21':
		case '22':
		case '24':
		case '25':
		case '26':
		tankname = tkG;
		break;
		
		case '27':
		tankname = tkH;
		break;
		
		case '28':
		tankname = tkI;
		break;
		
		case '29':
		case '30':
		tankname = tkJ;
		break;
		
		case '32':
		case '33':
		case '34':
		case '35':
		tankname = tkK;
		break;
		
		case '36':
		case '37':
		tankname = tkL;
		break;
		
		case '38':
		case '39':
		tankname = tkM;
		break;
		
		case '40':
		tankname = tkN;
		break;
		
		case '41':
		case '42':
		case '43':
		case '44':
		tankname = tkO;
		break;
		
		case '45':
		case '46':
		case '47':
		case '48':
		case '49':
		case '50':
		tankname = tkP;
		break;
		
		case '51':
		case '52':
		tankname = tkQ;
		break;
		
		case '53':
		case '54':
		case '55':
		case '56':
		case '57':
		case '58':
		tankname = tkR;
		break;
		
		case '59':
		tankname = tkS;
		break;
		
		case '60':
		case '61':
		case '62':
		case '63':
		case '64':
		case '65':
		tankname = tkT;
		break;
		
		case 'O1':
		case 'O2':
		tankname = tkU;
		break;
		
		case 'O3':
		case 'O4':
		tankname = tkV;
		break;
		
		case 'O5':
		case 'O6':
		tankname = tkW;
		break;
		
		case 'R1':
		case 'R2':
		tankname = tkX;
		break;
		
		case 'stella pan':
		tankname = tkY;
		break;
		
		case 'mixer':
		tankname = tkZ;
		break;
	};
	calcup();
}
function calcdown(){
	var r = tankname[0];
	var t = tankname[1];
	var th = tankname[2];
	var b = tankname[3];
	var bh = tankname[4];
	var vm = tankname[5];
	var d = document.getElementById("d").value;
	var v = vm - ((r * d) + t);
	document.getElementById("volume").innerHTML = v;
	document.getElementById("maxvolume").innerHTML = vm;
}