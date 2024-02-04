import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://weather-api-5k0i.onrender.com/getWeather', { cities });
      setWeatherData(response.data.weather);
    } catch (error) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cities" className="form-label">Enter city names separated by commas</label>
          <input type="text" className="form-control" id="cities" value={cities.join(', ')} onChange={(event) => setCities(event.target.value.split(',').map(city => city.trim()))} />
        </div>
        <button type="submit" className="btn btn-primary">Get Weather</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weatherData && (
        <div className="mt-5">
          <h2 className="text-center">Weather Data</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(weatherData).map(([city, temp]) => (
                <tr key={city}>
                  <td>{city}</td>
                  <td>{temp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;