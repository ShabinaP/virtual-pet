const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const STARTING_AGE= 0;
const MAXIMUM_AGE= 30;
const MAXIMUM_HUNGER= 10;
const MINIMUM_FITNESS= 0;
const AGE_INCREASE= 1;
const HUNGER_INCREASE= 5;
const FITNESS_DECREASE= 3;
const FITNESS_INCREASE= 4;
const HUNGER_LEVEL= 5;

function Pet (name) {

    this.name = name;
    this.age = STARTING_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];

};

Pet.prototype = {
    get isAlive() {
 return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    },

growUp () {
        if (!this.isAlive) {
            throw new Error ("Your pet is no longer alive :(")
        }
    
        this.age += AGE_INCREASE;
        this.hunger += HUNGER_INCREASE;
        this.fitness -= FITNESS_DECREASE;
    
    },

walk() {
        if (!this.isAlive) {
            throw new Error ("Your pet is no longer alive :(")
        }
        if ((this.fitness + FITNESS_INCREASE) <= MAXIMUM_FITNESS) {
            this.fitness +=FITNESS_INCREASE;
        }
        else {this.fitness = MAXIMUM_FITNESS} 
    },
feed() {
        if (!this.isAlive) {
            throw new Error ("Your pet is no longer alive :(")
        }
        if ((this.hunger - FITNESS_DECREASE) >= MINIMUM_HUNGER) {
            this.hunger -= FITNESS_DECREASE;
        }
        else {this.hunger = MINIMUM_HUNGER}
        },

checkup() {
        if (!this.isAlive) {
                throw new Error ("Your pet is no longer alive :(")
            }
        if(this.fitness <= FITNESS_DECREASE && this.hunger >= HUNGER_LEVEL) {
            return "I am hungry and I need a walk"
            }
        
        else if(this.fitness <= FITNESS_DECREASE) {
            return "I need a walk"
        }
        else if (this.hunger >= HUNGER_LEVEL) {
            return "I am hungry"
        }
        else 
        { return "I feel great"
            };
        },
haveBaby(name) {
            this.children.push(new Pet(name))
            return this.children
         },
         
};















module.exports = Pet;