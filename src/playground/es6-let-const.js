var name='sushma';
console.log('name',name);
//arrow functions
var fullname="mike smith";
/*let firstname;
const getname=(full)=>{
    return full.split(' ')[0];
};*/
let firstname;
const getname=(full)=> full.split(' ')[0];
console.log(getname(fullname));

