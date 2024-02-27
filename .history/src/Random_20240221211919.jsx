import React, { useState } from 'react';
import axios from 'axios';
import CardRandom from './CardRandom';

const Random = () => {
  const [location, setLocation] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  let randomIndex = Math.floor(Math.random() * 6);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://api.foursquare.com/v3/places/search',
      params: {
        query: location 
      },
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_REACT_APP_FSQ,
      },
    };

    try {
      const response = await axios.request(options);
      setSearchResults(response.data.results);

      if (response.data.results && response.data.results.length > 0) {
        randomIndex = Math.floor(Math.random() * response.data.results.length);
        console.log(response.data.results[randomIndex]);
      } else {
        console.error('Invalid response data or index');
      }
    } catch (error) {
      console.error('Error fetching data from the API', error);
    }
  };

  const handleOnChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
    <p className='ml-[25%] '>
      <h2 className='text-3xl p-2'>Not sure where to go? Let us pick it for you :)</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type='text'
          value={location}
          onChange={handleOnChange}
          className='bg-slate-600 p-3 text-xl m-1/2 text-white'
        />
        <button type='submit' className='bg-red-400 p-3 text-xl'>
          Submit
        </button>
        
      </form>
      </p>

      {searchResults.length > 0 && (
        <CardRandom className='top-1/2 left-1/2'
          title={searchResults[randomIndex].name}
          address={searchResults[randomIndex].location.formatted_address}
          category={searchResults[randomIndex].categories[0].name}
          country={searchResults[randomIndex].location.country}
        />
      )}
    </>
  );
};

export default Random;
