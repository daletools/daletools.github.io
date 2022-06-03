import { traits } from "/traits.js";

let inputs = {
    //keys for input values
    name: null,
    race: null,
    age: null,
    profession: null,
    home: null,
    temperament: null,
    bond: null,
    ideal: null,
    flaw: null,
    alignment: null,
    //array of unfilled values
    blanks: [],             

    //read values from html form and 
    assign() {
        this.blanks.length = 0;                 
        for (let property in inputs) {
            if (document.getElementById(property + 'Input').value) {
                this[property] = document.getElementById(property + 'Input').value;
            } else {
                this.blanks.push(property);
            }
            if (property === 'alignment') {
                this.assess();
                console.log(inputs);
                break;
            };
        }
    },

    assess() {
        let usedRace;   //stores index of chosen race for further calculations
        if (this.blanks.includes("race")) {         //
            usedRace = Math.floor(Math.random() * (traits.race.length - 1));
            this.race = traits.race[usedRace][0];
            console.log(`assigned race is ${this.race}`);
        } else if (traits.race.flat().includes(this.race)) {       //if user provides SRD race
            usedRace = traits.race.flat().indexOf(this.race);
            if (usedRace != 0) {
                usedRace /= 3;
            }
            console.log(`user chose ${this.race} at index ${usedRace}`);
        } else {
            usedRace = 7;       //if user provides custom race, use human data
            console.log(`user chose a custom race called ${this.race}`);
        }

        this.age = Math.floor(this.age * ((traits.race[usedRace][2] - traits.race[usedRace][1]) / 100) + traits.race[usedRace][1]);     //assigns age based on race
        console.log(`assigned age is ${this.age}`);
        
    }
}

function output() {
    console.log('I output the results!');
}

document.getElementById('btn').onclick = () => {
    inputs.assign();
}