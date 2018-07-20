'use strict'
class generatorRandom {
   generator(){
       let answer=[];
       while(answer.length < 4){
           let add = Math.ceil(Math.random()*9).toString();
           if(!answer.includes(add)){
               answer.push(add);
           }
       }
       return answer.join(' ');
   }
}
module.exports = generatorRandom;