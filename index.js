//let rect = {
  //  area: function(l,b){
     //   return l*b;
   // },
    //perimeter: function(l,b){
       // return 2 * (l+b);
  //  }
//}


const rec = require('./rect');
const cir =require('./circle');
console.log(cir.circle.area(2));
console.log(cir.circle.perimeter(2));
console.log(rec.area(3,4));
console.log(rec.perimeter(2,4));
