import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Loader from '../../assets/load.gif';

const Categories = () => {
  const [joke, setJoke] = useState({});
  const [ isLoad, setIsLoad ] = useState(false)
  const { category } = useParams();

  useEffect(() => {
    setIsLoad(true)
    api.get(`random?category=${category}`).then(
      res => {
        setJoke(res.data)
      }
    )
    .catch( err => console.error(err) )
    .finally( () => setIsLoad(false))
  }, [category])

  if(isLoad){
    return(
      <div className="cardContainer">
        <img src={Loader} alt="loader" className="loader"/>
      </div>
    )
  }
  
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={joke?.icon_url} alt={joke?.value} />
        <p>{joke?.value}</p>
      </div>
    </div>
  )
}

export default Categories