import React from 'react';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { FormControl, Select, Center } from '@chakra-ui/react';
import api from '../../services/api';

const Search = () => {
  const [opt, setOpt] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    api.get('categories').then(
      response => {
        setOpt(response.data);
      }
    )
    
  },[])

  const handleCategory = (e) => {
    navigate(`categories/${e.target.value}`)
  }

  return(
    <section className="banner">
      <Center>
        <FormControl>
          <Select width="350px" bg="white" size="lg" onChange={handleCategory} placeholder='Que tipo de piada você busca?'>
            {opt?.map((item, index) => (
              <option key={index} value={item}>{item}</option>
              ))}
          </Select>
        </FormControl>
      </Center>
    </section>
  )
}

export default Search