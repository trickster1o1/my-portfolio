import './ApiTest.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function ApiTest() {

    const [weather,setWeather] = useState([]);
    useEffect(() => {
        document.getElementById('wth').style.borderBottom= "2px solid red";
        document.getElementById('wth').style.color = 'red';
        document.getElementById('wth').style.fontWeight = 'bold';
        let fetchIp = async () => {
            await fetch('https://api.ipify.org/?format=json')
            .then(res=>res.json())
            .then((r)=>{
                fetch("https://weatherapi-com.p.rapidapi.com/current.json?q="+r.ip, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
                        "x-rapidapi-key": "a5bb063c13msh224ca114d820861p125720jsn3e6cc3d310c1"
                    }
                }).then((res)=>res.json())
                .then((r)=>{
                    console.log(r);
                    setWeather(r);
                })
                .catch((error)=>console.log(error));
            })
            .catch((error)=>console.log(error));
        }
        fetchIp();
    }, []);

    return(
        <>
        
            <nav id="back"><Link to='/'><span>Back</span></Link></nav>
            <div className="api-nav">
                <nav id='wth'>Weather</nav>
                <nav>Another</nav>
                <nav>another 1</nav>
            </div>
            <div id='weather'>
            { weather && weather.location ?
                <div className='api-body'>
                    <div> <h2>{weather.location.country + ", " + weather.location.name}</h2> </div>
                    <div  className='we-span'><img alt="error404" src={weather.current.condition.icon} />
                        <div>{weather.current.temp_c}&deg;C</div>
                        <span style={{'color':'rgba(0,0,0,0.5)','fontSize':'10pt','display':'block'}}>{weather.current.condition.text}</span>
                    </div>
                    <div className='we-calc'>
                        <div>Humidity: {weather.current.humidity}</div>
                        <div>Wind: {weather.current.wind_mph+"mph"}</div>
                        <div>Gust: {weather.current.gust_mph+"mph"}</div>
                    </div>
                </div> 
                : "nothing"
            }
            </div>
        </>
    )
}

export default ApiTest;