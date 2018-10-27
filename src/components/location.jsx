import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const Location = () => {
  const [locationQuery, setLocationQuery] = useState('New York');
  const [locationResults, setLocationResults] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationQuery}&APPID=${apiKey}`
    )
    .then(res => res.json())
    .then(json => {
      setLocationResults(json)
    })
    .catch(err => console.error(err))
  }, [locationQuery])

  return(
    <div>
      <label>change location: </label>
      <input
        type="text"
        label="location"
        onChange={(e) => {setLocationQuery(e.target.value)}}
      />
      <button
        type="submit"
        onClick={() => {console.log(locationQuery)}}
      >
        change
      </button>
      <p>
        <label>current location: </label><span>{locationQuery}</span>
      </p>
      <p>
        <label>results: </label><span>{JSON.stringify(locationResults)}</span>
      </p>

    </div>
  )
}

export default Location;
