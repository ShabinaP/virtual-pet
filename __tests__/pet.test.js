const { TestWatcher } = require("@jest/core")
const Pet = require('../src/pet');

describe ("constructor", () => {
    it ("returns an object", () => {
        expect(new Pet ("Fido")).toBeInstanceOf(Object);
    });

    it ("sets the name property", () => {
       const pet = new Pet("Fido");

expect(pet.name).toEqual("Fido");
    })

    it("initial age is 0", () => {
        const pet = new Pet("Fido");
    expect(pet.age).toEqual(0)
    })
});

describe("isAlive", () => {
    it("returns false if fitness is 0 or less", () => {
        const pet = new Pet("Fido");
        pet.isAlive
        pet.fitness = 0;
     expect(pet.isAlive).toEqual(false);
    });

    it("returns false if hunger is 10 or more", () => {
        const pet = new Pet("Fido");
        pet.isAlive
        pet.hunger = 10;
    expect(pet.isAlive).toEqual(false);
    });

    it("returns false if age is 30 or more", () => {
        const pet = new Pet("Fido");
        pet.isAlive
        pet.age = 30;
     expect(pet.isAlive).toEqual(false);
    });

    it("returns true if age is less than 30 and hunger is less than 10 and fitness is greater than 0 ", () => {
        const pet = new Pet("Fido");
        pet.isAlive
        pet.age < 30
        pet.hunger < 10
        pet.fitness > 0
    expect(pet.isAlive).toEqual(true);
    });

});

describe("growup", () => {
    it("throws an error if pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30;
        pet.hunger = 11;
        pet.fitness = 0;
        expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(")
    })

    it("increases the age by 1", () => {
        const pet = new Pet("Fido");
        pet.growUp()
        expect(pet.age).toEqual(1);
    });
    it("increases hunger by 5", () => {
        const pet = new Pet("Fido");
        pet.growUp()
        expect(pet.hunger).toEqual(5)
    });
    it("decreases fitness by 3", () => {
        const pet = new Pet("Fido");
        pet.growUp()
        expect(pet.fitness).toEqual(7)
    });
});

describe("walk", () => {
    it("throws an error if pet is not alive", () => {
        const pet = new Pet("Fido");
        pet.age = 30
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow("Your pet is no longer alive :(")
    });
    it("increases fitness by 4", () => {
        const pet = new Pet("Fido");
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8)
    });
    it("increases fitness to a maxiumum of 10", () => {
        const pet = new Pet("Fido");
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10)
    });

});

describe("feed", () => {
    it("decreases hunger level by 3", () => {
        const pet = new Pet("Fido");
        pet.hunger = 6;
        pet.feed();
        expect(pet.hunger).toEqual(3)
    });
        it("decreases hunger to a minimum of 0", () => {
        const pet = new Pet("Fido");
        pet.hunger = 0;
        pet.feed();
        expect(pet.hunger).toEqual(0)
        });

        it("throws an error if pet is not alive", () => {
            const pet = new Pet("Fido");
            pet.age = 30;
            pet.hunger = 11;
            expect(() => pet.feed()).toThrow("Your pet is no longer alive :(")
        });
    });

    describe("checkup", () => {
        it("throws an error if pet is not alive", () => {
            const pet = new Pet("Fido");
            pet.age = 30;
            pet.hunger = 11;
            pet.fitness = 0;
            expect(() => pet.checkup()).toThrow("Your pet is no longer alive :(")
        });
        it("returns string if fitness is 3 or less", () => {
            const pet = new Pet("Fido");
            pet.checkup();
            pet.fitness = 3;
            expect(pet.checkup()).toEqual("I need a walk")
        });

        it("returns a string if hunger is 5 or more", () => {
            const pet = new Pet("Fido");
            pet.checkup();
            pet.hunger = 5;
expect(pet.checkup()).toEqual("I am hungry")
        });

        it("returns a string if fitness is 3 or less and hunger is 5 or more", () => {
            const pet = new Pet("Fido");
            pet.checkup();
            pet.hunger = 5;
            pet.fitness = 3;
        expect(pet.checkup()).toEqual("I am hungry and I need a walk")
        });

        it("returns a string if fitness is more than 3 and hunger less than 5", () => {
            const pet = new Pet("Fido");
            pet.checkup();
            pet.hunger = 4;
            pet.fitness = 4;
        expect(pet.checkup()).toEqual("I feel great")
        });
    });

    describe("parent", () => {
    it("pet creates a new instance called parent", () => {
        const parent = new Pet ("Bob");
    expect(parent).toBeInstanceOf(Pet)
       });
       
       it("the haveBaby function should return an array of the pet's children", () => {
        const parent = new Pet ("Bob");
        
        expect(parent.haveBaby()).toEqual(parent.children)
       });
     
      it("the first element in the children array has a name property of Billy", () => {
        const parent = new Pet ("Bob");
        parent.haveBaby("Billy") 
        expect(parent.children[0].name).toEqual("Billy")
      })
    });

    ;
