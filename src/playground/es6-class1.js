//to create constructor to take name and age default to 0
//getDescription - sushma is 20 years old

class People{
    constructor(name='anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getgretting(){
        return `hey this is ${this.name}.`
    }
    getDescription(){
       return `${this.name} is ${this.age} years old`
    }
}
class Traveller extends People{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    hashomelocation(){
        return !!this.homelocation;
    }
    getgretting(){
        let gretting=super.getgretting();
        if (this.homelocation){
            gretting+= ` i'm from ${this.homelocation}`;
        }
        return gretting;
    }
}

const me = new Traveller('sushma',20,'bangalore');
console.log(me.getgretting());


const he= new Traveller();
console.log(he.getgretting());
