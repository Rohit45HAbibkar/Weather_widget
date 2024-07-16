
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){

  let [weatherinfo,setweatherinfo]=useState({

    city:"Delhi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",


  });

  let updateinfo=(info)=>{
    setweatherinfo(info);

  }
  return(
    <div style={{textAlign:"center", fontFamily:"sans-serif"}}>
        <h2><i>------------------------- Weather Widget--------------------------</i></h2>
        <SearchBox updateinfo={updateinfo}/> <br />
        <InfoBox info={weatherinfo}/>
    </div>
  )
}