//tank array index
{
//tk = [name, L/inch, top slope volume, top slope height, bottom slope volume, bottom slope height, total volume]
var v = 0;									//calculated tank volume
const CONV = 61.0237;						//converting from L/inch to cubic inches
var destTanks = [];							//container for tanks to be balanced
var tankarray = [['1',38.78,51,1,87,2,4676],['2',38.78,51,1,87,2,4676],['3',38.78,51,1,87,2,4676],['4',38.78,51,1,87,2,4676],['5',38.78,51,1,87,2,4676],['6',38.78,51,1,87,2,4676],
	['7',75.70,114,0,720,16,10514],['8',75.70,114,0,720,16,10514],['9',75.70,114,0,720,16,10514],
	['10',75.84,-245,3,245,3,10046],
	['11',76.77,-225,3,225,3,11044],
	['12',75.84,-245,3,245,3,10046],
	['13',75.70,114,0,720,16,10514],['14',75.70,114,0,720,16,10514],['15',75.70,114,0,720,16,10514],
	['16',38.78,51,1,87,2,4676],
	['17',32.38,49,2,62,0,4709],
	['18',38.78,51,1,87,2,4676],
	['19',31.5,0,0,52,2,2320],
	['20',76.12,-185,3,185,3,10874],['21',76.12,-185,3,185,3,10874],['22',76.12,-185,3,185,3,10874],
	['23',77.53,-168,3,168,3,10105],
	['24',76.12,-185,3,185,3,10874],['25',76.12,-185,3,185,3,10874],['26',76.12,-185,3,185,3,10874],
	['27',31.5,0,0,52,2,2320],
	['28'],
	['29',171.91,-565,5,565,5,24166],['30',171.91,-565,5,565,5,24166],
	['31',76.77,-225,3,225,3,11044],
	['32',85.02,-170,4,335,0,11387],['33',85.02,-170,4,335,0,11387],['34',85.02,-170,4,335,0,11387],['35',85.02,-170,4,335,0,11387],
	['36',385.93,-1350,7,830,5,85540],['37',385.93,-1350,7,830,5,85540],
	['38',219.08,-657,6,570,5,48745],['39',219.08,-657,6,570,5,48745],
	['40',77.71,0,0,160,0,7620],
	['41',83.66,0,0,690,13,11440],['42',83.66,0,0,690,13,11440],['43',83.66,0,0,690,13,11440],['44',83.66,0,0,690,13,11440],
	['45',68.72,295,0,205,0,5860],['46',68.72,295,0,205,0,5860],['47',68.72,295,0,205,0,5860],['48',68.72,295,0,205,0,5860],['49',68.72,295,0,205,0,5860],['50',68.72,295,0,205,0,5860],
	['51',17.54,0,0,0,0,1000],['52',17.54,0,0,0,0,1000],
	['53',83.54,540,0,370,7,12460],['54',83.54,540,0,370,7,12460],['55',83.54,540,0,370,7,12460],['56',83.54,540,0,370,7,12460],['57',83.54,540,0,370,7,12460],['58',83.54,540,0,370,7,12460],
	['59',87.54,0,0,860,0,16267],
	['60',56.3,199,0,0,0,6980],['61',56.3,199,0,0,0,6980],['62',56.3,199,0,0,0,6980],['63',56.3,199,0,0,0,6980],['64',56.3,199,0,0,0,6980],['65',56.3,199,0,0,0,6980],
	['o1',76.77,115,3,662,15,10450],['o2',76.77,115,3,662,15,10450],
	["o3",219.08,0,0,570,5,39347],['o4',219.08,0,0,570,5,39347],
	["o5",265.9,0,0,0,0,60853],['o6',265.9,0,0,0,0,60853]
	['r1',68.91,0,0,252,8,5420],['r2',68.91,0,0,252,8,5420],
	['stella',37.17,0,0,0,0,1300],
	['mixer',56.60,0,0,162,2,3388]];
}
//tank object
var tank = {name:0, volume:0, rate:0, tsvolume:0, tsheight:0, bsvolume:0, bsheight:0,
fetchParams : function(input){														//pull dimensions from tank array
	var tk = document.getElementById(input).value.toLowerCase();
	if (tk.includes("o1")) {
		tk = "66";
	}
	if (tk.includes("o2")) {
		tk = "67";
	}
	if (tk.includes("o3")) {
		tk = "68";
	}
	if (tk.includes("o4")) {
		tk = "69";
	}
	if (tk.includes("o5")) {
		tk = "70";
	}
	if (tk.includes("o6")) {
		tk = "71";
	}
	if (tk.includes("r1")) {
		tk = "72";
	}
	if (tk.includes("r2")) {
		tk = "73";
	}
	if (tk.includes("stella")) {
		tk = "74";
	}
	if (tk.includes("mixer")) {
		tk = "75";
	}
	tk = parseInt(tk) - 1;
	this.name = tankarray[tk][0];
	this.volume = tankarray[tk][6];
	this.rate = tankarray[tk][1];
	this.tsvolume = tankarray[tk][2];
	this.tsheight = tankarray[tk][3];
	this.bsvolume = tankarray[tk][4];
	this.bsheight = tankarray[tk][5];
},
volfromTop : function(){
	d = document.getElementById("d").value;
	if (d < tank.tsheight) {
		v = tank.volume - Math.abs(d / tank.tsheight * tank.tsvolume);
	} else {
		v = tank.volume - ((tank.rate * d) + tank.tsvolume);
}
},
volfromBottom : function(){
	d = document.getElementById("d").value;
	v = (tank.rate * d) + tank.bsvolume;
}
};
function gettankdown() {
	tank.fetchParams("tank");
	tank.volfromTop();
//send results to page
	document.getElementById("volume").innerHTML = v;
	document.getElementById("maxvolume").innerHTML = tank.volume;
}
function gettankup() {
	tank.fetchParams("tank");
	tank.volfromBottom();
	document.getElementById("volume").innerHTML = v;
	document.getElementById("maxvolume").innerHTML = tank.volume;
}
function destinationTank(id) {
	if (document.getElementById(id).classList.contains("w3-dark-grey")) {
		document.getElementById(id).classList.remove("w3-dark-grey");
		document.getElementById(id).classList.add("w3-light-grey");
		destTanks.push(id);		
	}	else {
			document.getElementById(id).classList.remove("w3-light-grey");
			document.getElementById(id).classList.add("w3-dark-grey");
			for (var i = 0; i < destTanks.length; i++){
				if (destTanks[i] == id){
					destTanks.splice(i,1);
				}
			}
	}
}
function balancecalc() {
	var iv = document.getElementById("inputvol").value;
	var tankset = [];
	for (i = 0; i < destTanks.length; i++){
		tankset.push(tankarray[destTanks[i,1]]);
		console.log(tankset);
	}
	
}