
interface User{
  name: string,
  edad: number,
  id: number
}

class UsserAcount{
  name: string
  edad: number
  id: number

  constructor( name: string, edad: number, id: number){
    this.name = name
    this.edad = edad
    this.id = id
  }
}

const myUser: User = new UsserAcount("Uriel", 19, 10);



console.log(myUser.id);
