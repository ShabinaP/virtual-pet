const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const STARTING_AGE= 0;
const MAXIMUM_AGE= 30;
const MAXIMUM_HUNGER= 10;
const MINIMUM_FITNESS= 0;

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
    
        this.age += 1;
        this.hunger += 5;
        this.fitness -=3;
    
    },

walk() {
        if (!this.isAlive) {
            throw new Error ("Your pet is no longer alive :(")
        }
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness +=4;
        }
        else {this.fitness = MAXIMUM_FITNESS} 
    },
feed() {
        if (!this.isAlive) {
            throw new Error ("Your pet is no longer alive :(")
        }
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        }
        else {this.hunger = MINIMUM_HUNGER}
        },

checkup() {
        if (!this.isAlive) {
                throw new Error ("Your pet is no longer alive :(")
            }
        if(this.fitness <= 3 && this.hunger >= 5) {
            return "I am hungry and I need a walk"
            }
        
        else if(this.fitness <= 3) {
            return "I need a walk"
        }
        else if (this.hunger >= 5) {
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