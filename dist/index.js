"use strict";
class UsserAcount {
    constructor(name, edad, id) {
        this.name = name;
        this.edad = edad;
        this.id = id;
    }
}
const myUser = new UsserAcount("Uriel", 19, 10);
console.log(myUser.id);
