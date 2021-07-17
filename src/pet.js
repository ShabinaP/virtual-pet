const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const STARTING_AGE= 0;

function Pet (name) {
this.name = name;
this.age = STARTING_AGE;
this.hunger = MINIMUM_HUNGER;
this.fitness = MAXIMUM_FITNESS;
this.children = [];
}

Pet.prototype = {
    get isAlive() {
 return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error ("Your pet is no longer alive :(")
    }

    this.age += 1;
    this.hunger += 5;
    this.fitness -=3;

}

Pet.prototype.walk = function () {
    if (!this.isAlive) {
        throw new Error ("Your pet is no longer alive :(")
    }
    if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
        this.fitness +=4;
    }
    else {this.fitness = MAXIMUM_FITNESS} 
};

Pet.prototype.feed = function () {
if (!this.isAlive) {
    throw new Error ("Your pet is no longer alive :(")
}
if ((this.hunger - 3) >= MINIMUM_HUNGER) {
    this.hunger -= 3;
}
else {this.hunger = MINIMUM_HUNGER}
};

Pet.prototype.checkup = function () {
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
};





Pet.prototype.haveBaby = function(name) {
   this.children.push(new Pet(name))
   return this.children
};





module.exports = Pet;