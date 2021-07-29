# Project Title

Virtual Pet.

## Description

This project creates a virtual pet using Javascript. The Pet constructor function allows you to create Pet instances which have access to functionalities to help look after your Pet. These include: a feed function, which will reduce the hunger (property) level by 3 when called (to a minimum of 0). A Walk function , which when called, will increase the fitness (property) level by 4 (to a maximum of 30). The growUp function will affect a number of properties including age (increasing by 1), hunger (increasing by 5) and fitness (decreasing by 3) when called. The checkup function performs a health check on your virtual pet. If a certain property is under a certain value, for example: the fitness property is equal to 3 or less, it will return a string, advising the owner (you!) that your pet needs some exercise to keep healthy and alive. There is also a haveBaby function which makes it possible for your pet to have children! 
Finally, the isAlive function is a getter method. This method will check the value of properties such as hunger, fitness and age and will return true if it meets certain criteria (age < 30, hunger < 10 and fitness > 0), otherwise, it will return false. The guard clause technique is used on the walk, growUp and feed functions to prevent the function code from modifying state if the above criteria is not met. This is because we don't want the functions to modify the state of the Pet's fitness, age or hunger properties as the pet is no longer alive. Instead, it will throw an error advising "Your pet is no longer alive :(".

[Project] (https://github.com/ShabinaP/virtual-pet)

## Built With:

- Javascript

## Available Commands

- "npm run test": Launches the test runner in the terminal 

**Shabina Patel**
- [Profile] (https://github.com/ShabinaP)
- [Email] (mailto: shabina-patel@hotmail.com "Hi!")


