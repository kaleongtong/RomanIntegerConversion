//1)What is the range that we are parsing the number up to?
//2) What are some general rules between roman numbers and the decimal numbers?
//3) Do I have to convert negative numbers?
//4) Is the roman to integer lookup given to me? Or do I have to manually create a look up table myself?


let romanLookUp = {
    I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
};

let romanToInt = (romanLookUp, romanStr) => {
    let upperRoman = romanStr.toUpperCase();
    let total = 0;
    let i = 0;
    while(i != upperRoman.length){
       let curVal = romanLookUp[romanStr.charAt(i)];
       let nextVal = romanLookUp[romanStr.charAt(i + 1)];
  
       if(curVal >= nextVal || nextVal === undefined){
          total = total + curVal;
          i++;
       }else if(curVal < nextVal){
          total = total + (nextVal - curVal);
          i+=2;
       } 
   }
   return total;
}

console.log(romanToInt(romanLookUp,"MCMLIV"));//1954
console.log(romanToInt(romanLookUp, "CCVII")); //207
console.log(romanToInt(romanLookUp, "I"));//1
console.log(romanToInt(romanLookUp, "XCIX"));//99
