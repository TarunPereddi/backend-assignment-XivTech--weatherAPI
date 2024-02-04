const express = require('express');
const axios = require('axios');
const cors = require('cors');

const API_KEY = process.env.WEATHER_API_KEY;;

const app = express();
app.use(cors());
app.use(express.json());


app.post('/getWeather', async (req, res) => {
  const cities = req.body.cities;
  const weatherData = {};

  for (let city of cities) {
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);
    const weather = response.data.currentConditions;
    weatherData[city] = weather.temp + 'C';
  }

  res.json({ weather: weatherData });
  console.log({ weather: weatherData })
});

app.listen(3001, ()=>{
  console.log("Server Started")
});