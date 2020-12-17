import React,{useState,useEffect} from 'react';
import './weather.styles.css';
//import { Button,Card,Container,Row,Col} from 'react-bootstrap';
import { TextField } from '@material-ui/core';

const Weatherbox=()=>{
    const [tempa,setTempa]=useState("");
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
   // const [atmos,setAtmos]=useState(null);
    const [searchQuery,setsearchQuery]=useState("");

    useEffect(() => {
         const funAsync=async ()=>{
                            console.log("kaju");
                            const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&units=metric&APPID=20c5c6babd9d0511a1a19e32dafb02fe`);
                            const resJson = await response.json(); 
                            console.log(resJson);

                            setTempa(resJson.main);
                            setCity(resJson.name);
                            setCountry(resJson.sys);
                        // setAtmos(resJson.weather[0].main);
                                 }
                 funAsync();
        }
    ,[searchQuery])

    const handleChange=(e)=>{
        setsearchQuery(e.target.value)
    }
   return(
       <>
        <div className="weather-box">
         
             <div className="two">
               <TextField id="search" 
                         label="search weather by city name"
                         onChange={handleChange}
                         value={searchQuery} />
                 <br/>
                 <div>
               
                 {
                    tempa ? (<h3>{tempa.temp} C</h3>  )  : ( <h3>No Data Found</h3>)
                   
                 }
                 {
                    city  ? (
                              <h3>{city}</h3>  
                            )  
                          :""
                 }
                 {
                     country?(<h3> {country.country}</h3>):("")
                 }
               
                 </div>
             </div>
           
       </div>
       </>
   )
}

export default Weatherbox;