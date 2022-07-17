import React, { useState } from "react";
import augustus from "./img/Augustus.jpg"
import arcadius from "./img/Arcadius.jpg"
import aurelian from "./img/Aurelian.png"
import caligula from "./img/Caligula.jpg"
import caracalla from "./img/Caracalla.jpg"
import claudius from "./img/Claudius.jpg"
import constantine from "./img/Constantine.jpg"
import domitian from "./img/Domitian.jpg"
import galienus from "./img/Galienusi.jpg"
import hadrian from "./img/Hadrian.jpg"
import marcus from "./img/Marcus.jpg"
import Phillipe from "./img/Phillipe.jpg"
import severus from "./img/Severus.jpg"
import tiberius from "./img/tiberius.jpg"
import traian from "./img/Traian.jpg"
import Vespasian from "./img/Vespasian.jpg"













const chads =[augustus,arcadius,aurelian,caligula,caracalla,claudius,constantine,domitian,galienus,hadrian,marcus,Phillipe,severus,tiberius,traian,Vespasian]
const names = ["Augustus","Arcadius","Aurelianus","Caligula","Caracalla","Claudius","Constantine the great","Domitian","Galienus","Hadrian","Marcus Aurelius","Phillipe Arabus","Septimius Severus","Tiberius","Traianus","Vespasianus"]


function Container (){

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
const [ceckArr, setCheckArr] = useState([])
const [lvl, setLvl] = useState(randomUniqueNum(16,4))
const [bestScore , seBestScore] = useState(0)


function childClick (event){
  let scoreCheck = score+1;
console.log(ceckArr)
 setCheckArr([...ceckArr,event.target.id])


 
  if(ceckArr.includes(event.target.id)){
if(score > bestScore){
  seBestScore(score)
}
setDificulity(1)
setLvl(randomUniqueNum(16,4))
setScore(0)
setCheckArr([])
  }else{
    setScore(score+1)

    if(scoreCheck <4){
      let arrr = randomUniqueNum(4,4)
      let mix=[]
      arrr.map((num)=>{
      mix.push(lvl[num])
      })
      setLvl(mix)
    }
      else if(scoreCheck >= 4){
        let arrr = randomUniqueNum(8,8)
        let mix=[]
        arrr.map((num)=>{
        mix.push(lvl[num])
        })
        setLvl(mix)
      }else if(scoreCheck > 12){
        let arrr = randomUniqueNum(12,12)
        let mix=[]
        arrr.map((num)=>{
        mix.push(lvl[num])
        })
        setLvl(mix)
      }else if (scoreCheck > 24){
        let arrr = randomUniqueNum(16,16)
        let mix=[]
        arrr.map((num)=>{
        mix.push(lvl[num])
        })
        setLvl(mix)
      }
    if(scoreCheck === 4){
        
      setCheckArr([]);
      
      setLvl([])
      setLvl(randomUniqueNum(16,8))
          setDificulity(2)
        }else if(scoreCheck === 12){
          setLvl(randomUniqueNum(16,12))
          setCheckArr([]);
      
          console.log("jaj")
          setDificulity(3)
        }else if (scoreCheck === 24){
          setCheckArr([]);
          setLvl(randomUniqueNum(16,16))
      
        
          setDificulity(4)
        }
        else if (scoreCheck === 32){
          setLvl(randomUniqueNum(16,0))
        setWintext("Glor to you will be know as the optimus princeps")
        setCheckArr([]);
        }
  }

 


}


    return <div className="container">
<header> {winText}</header>
<div className="text-container"> <p> Score: {score} | Best score: {bestScore}</p> <p></p> <p>  </p> <p>Lvl: {dificulity}</p></div>
<div className="card-container">


{
  
  lvl.map((numero,index)=>{

    return <div key={index} id={numero}  className="card" onClick={childClick} >
    
    <img className="emperor-img" id={numero} onClick={childClick} src={chads[numero]}>
    </img>
    <h1 className="emperor-text" id={numero}  onClick={childClick} > {names[numero]}</h1>
    
    
    
     </div>
    
    
    })
}
</div>

    </div>
}
export default Container