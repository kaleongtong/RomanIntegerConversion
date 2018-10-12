let IntToRoman = (romanLookUp, num) => {
    let romanStr = '';
    Object.keys(romanLookUp).forEach(function(key,index){
       let numTimes = Math.floor(num/ romanLookUp[key]);
       num = num - (numTimes * romanLookUp[key]);
       romanStr = romanStr + key.repeat(numTimes);
    });

    return romanStr;
}

console.log(IntToRoman(romanLookUp, 2018));
