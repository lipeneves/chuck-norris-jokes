import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Loader from '../../assets/load.gif'
import {
  Input,
  Button
} from '@chakra-ui/react';

const Home = () => {

  const [data, setData] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [jokeSearch, setJokeSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [allJokes, setAllJokes] = useState({});

  useEffect(() => {
    setIsLoad(true)
      api.get('random').then(
        response => {
          setData(response.data)
        }
      )
      .catch( err => console.error(err))
      .finally(() => setTimeout(() => {
        setIsLoad(false);
      }, 2500))
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoad(true)
      api.get(`search?query=${jokeSearch}`).then(
        res => {
          setIsSearch(true)
          setAllJokes(res.data)
        }
      )
      .catch( err => console.error(err))
      .finally( () => setIsLoad(false))
    }

    if(isLoad){
      return(
        <div className="cardContainer">
          <img src={Loader} alt="Loader" className="loader"/>
        </div>
      )
    }

  return (
    <div className="cardContainer">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <Input className="inputSearch" placeholder="Pesquise sua piada" bg="white" type="text" onChange={e => setJokeSearch(e.target.value)} />
          <Button className="btnSearch" type="submit">Pesquisar</Button>
        </form>
      </div>
      { !isSearch ? (
  <div className="card">
    <img src={data?.icon_url} alt={data?.value} />
    <p>{data?.value}</p>
  </div>
) : (
  <>
    { allJokes?.result.map( (item, index) => (
      <div key={index} className="card">
        <img src={item?.icon_url} alt={item?.value} />
        <p>{item?.value}</p>
      </div>
    ))}
  </>
)}
    </div>
  )
}

export default Home;





