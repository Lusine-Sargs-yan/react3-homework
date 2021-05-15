import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import CityList from "../../components/CityList";


const BASE_URL = 'https://restcountries.eu/rest/v2';



export default function Cities() {
  const {city} = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const history =  useHistory();

  useEffect(() => {
    setLoading(true);

    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((response) => response.json())
    .then((results) => {

      console.log(data, 'data');
      let cpaitals = results.map(({capital}) => capital)
      setData(results);
      setLoading(false);
    })
  }, []);

  if(isLoading) {
    return <CircularProgress />
  }

  const handleCountryClick = (city) => {// for every city  click
    history.push(`/cities/${city}`);
  };
  console.log(data, 'dattat::')
  return (
    <div>
      <h3>All Cities</h3>
      <CityList onItemClick={handleCountryClick} items={data}/>
    </div>
  )
}
