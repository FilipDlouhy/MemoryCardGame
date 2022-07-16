import React, { useEffect, useState } from "react";
import  { emperors,names } from "./Emperors";

function Container (){
    function randomNumberInRange(min, max) {
        // 👇️ get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      function randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 0; i <= range; i++) {
          arr.push(i)
        }
      
        let result = [];
      
        for (let i = 1; i <= outputCount; i++) {
          const random = Math.floor(Math.random() * (range - i));
          result.push(arr[random]);
          arr[random] = arr[range - i];
        }
      
        return result;
      }
      const [winText,setWintext]= useState(" Memory game of Roman Emperors");
const [score,setScore]= useState(0);
const [dificulity,setDificulity]=useState(1)

const [lvl, setLvl] = useState(randomUniqueNum(16,4))
const [bestScore , seBestScore] = useState(0)
function leShufle(score){

  score++;
console.log(score)
if(score <4){
  let arrr = randomUniqueNum(4,4)
  let mix=[]
  arrr.map((num)=>{
  mix.push(lvl[num])
  })
  setLvl(mix)
}
  else if(score > 4){
    let arrr = randomUniqueNum(8,8)
    let mix=[]
    arrr.map((num)=>{
    mix.push(lvl[num])
    })
    setLvl(mix)
  }else if(score > 8){
    let arrr = randomUniqueNum(12,12)
    let mix=[]
    arrr.map((num)=>{
    mix.push(lvl[num])
    })
    setLvl(mix)
  }else if (score > 12){
    let arrr = randomUniqueNum(16,16)
    let mix=[]
    arrr.map((num)=>{
    mix.push(lvl[num])
    })
    setLvl(mix)
  }
}   

function leCheck(score){
score++;
console.log(score)
  if(score === 4){
    console.log("jaj")
    setLvl(randomUniqueNum(16,8))
    document.querySelectorAll(".card"). removeAttribute("id") 
    setDificulity(2)
  }else if(score === 8){
    setLvl(randomUniqueNum(16,12))
    document.querySelectorAll(".card"). removeAttribute("id") 
    setDificulity(3)
  }else if (score === 12){
    setLvl(randomUniqueNum(16,16))
    document.querySelectorAll(".card"). removeAttribute("id") 
    setDificulity(4)
  }
  else if (score === 16){
    setLvl(randomUniqueNum(16,0))
  setWintext("Glor to you will be know as the optimus princeps")
  }
  
}

  const CardShuffle = (event)=>{
 
    if( event.target.id==="clicked"){
if(score > bestScore){
  seBestScore(score)
}
      setScore(0)

      setLvl(randomUniqueNum(16,4))
  document.querySelectorAll(".card"). removeAttribute("id") 
      }else{
        
        setScore(score+1)
      
        event.target.setAttribute("id","clicked")
      }
     leShufle(score)
      leCheck(score)



  
   
    






  }

    return <div className="container">
<header> {winText}</header>
<div className="text-container"> <p> Score: {score} | Best score: {bestScore}</p> <p></p> <p>  </p> <p>Lvl: {dificulity}</p></div>
<div className="card-container">


{
  
  lvl.map((numero)=>{

    return <div key={numero}   className="card" onClick={CardShuffle}>
    
    <img src={emperors[numero]}>
    </img>
    <h1>{names[numero]}</h1>
    
    
    
     </div>
    
    
    })
}
</div>

    </div>
}
export default Container