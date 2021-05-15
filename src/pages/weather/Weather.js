import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CitiesData } from "../../service/data";

const API_KEY = "9b299266415943b1505a59ba3f084659";

export default function Weather() {
  const [weather, setWeather] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [wind, setWind] = useState([]);
  const { cityName } = useParams();
  const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("weather", data);

        setWeather(data.weather);
        setTemperature(data.main);
        setWind(data.wind);
      });
  }, [cityName]);

  console.log(cityName, "cityName:::");
  console.log(weather, 'weather:::');
  console.log(temperature, "temperature:::");


  const RenderTemperature = () => {

    return Object.entries(temperature).map(([key, value]) => {
      let celsius = 0;
      //console.log(key, 'key::::', value)
      if(key === 'temp' || key === 'temp_max' || key === 'temp_min' || key === 'pressure' || key === 'humidity' || key === 'feels_like') {
        //console.log(key, 'key::::')

        if(key === 'temp' || key === 'feels_like' || key === 'temp_max' || key === 'temp_min' ) {
          celsius = Math.floor(value - 275);
          key = `${key.toUpperCase()}`;
          return (
            <div>
              <h4>{key} : {celsius} °C </h4>
            </div>
          )
        }

        if(key === 'humidity' ) {
          value = `${value} %`;
          key = `${key.toUpperCase()}`;
        }
        if(key === 'pressure' ) {
          value = `${value} hPa`;
          key = `${key.toUpperCase()}`;
        }
      }
      return (
        <div>
          <h4>{key} : {value}</h4>
        </div>
      )

    })
  }

  return (
    <>
      <h3>Weather {cityName}</h3>
      <RenderTemperature />
      <h4>WIND: S {wind.speed}  km/hr</h4>
      <h4>DESCRIPTION: {weather[0]?.description}</h4>
      
    </>
  );
}

//° C * 1.8 +32 = °F . 
