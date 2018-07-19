class generatorRandom {
   generator(){
       let answer=[];
       while(answer.length < 4){
           let add = Math.ceil(Math.random()*10).toString();
           if(!answer.includes(add)){
               answer.push(add);
           }
       }
       return answer.join(' ');
   }
}
module.exports = generatorRandom;