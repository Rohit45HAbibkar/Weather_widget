import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"

import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({updateinfo}) {
  let [city,setcity]=useState("");
  let [error,seterror]=useState(false);

  const API_URL="https://api.openweathermap.org/data/2.5/weather"

  const API_KEY="a0574c885283e49e55c5f842f4144605"
   
     

    let getWeatherInfo=async()=>{
    try{ let res= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jres=await res.json();

    let result={
     city:city,
     temp:jres.main.temp,
     tempMin:jres.main.temp_min,
     tempMax:jres.main.temp_max,
     humidity:jres.main.humidity,
     feelsLike:jres.main.feels_like,
     weather:jres.weather[0].description,

    };
    console.log(result);
    return result;
}catch(err){
  throw err;
}
    }

    let handlechnage=(event)=>{
       
        setcity(event.target.value);
    };

    let handlesubmit=async(e)=>{
       try{
        e.preventDefault();
        console.log(city);
        setcity("");
       let info= await getWeatherInfo();
       updateinfo(info);
       }catch(err){
        seterror(true)
       }

    }

  return (
    <div className="SearchBox">
     
      <form    onSubmit={handlesubmit}>
        <TextField id="id" label="City Name" variant="outlined" required 
        value={city} onChange={handlechnage}
        placeholder="Enter city Name"
     
        /><br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <b><p>No Such place exit or Not Available in Api :))</p></b>}

      </form>
    </div>
  );
}
