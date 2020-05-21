//multiply
const multipliers={
    numbers:[1,2,3],
    mul(b){
        return this.numbers.map((num)=>num*b);
        
    }

};
console.log(multipliers.mul(8))