# Weather API

This repository contains the backend assignment for XivTech - a simple weather API.

## Setup

1. Clone this repository:

   ```
   git clone https://github.com/TarunPereddi/backend-assignment-XivTech--weatherAPI.git
   ```

2. Navigate to the project directory:

   ```
   cd backend-assignment-XivTech--weatherAPI
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Replace the API_KEY in `index.js` file with your own API key from Visual Crossing.
## Usage

1. Start the server:

   ```
   npm start
   ```

2. Use an application like Postman or Hoppscotch to send a POST request to the `https://localhost:3000/getWeather` endpoint with a body similar to this:

   ```json
   {
     "cities": [ "toronto", "mumbai", "london" ]
   }
   ```

The output will be similar to this:

```json
{ "weather": { "toronto": "24C", "mumbai": "34C", "london": "14C" } }
```

Please note that the temperatures are just examples and will vary based on the actual weather conditions.

# Bonus Task: Weather App UI

Create a simple UI app that enhances the user experience by accepting city names as input in a text box. The app should make a call to the API endpoint created and display the weather results in the UI.

**Live Demo:** [Xiv Tech - Weather App](https://xiv-tech-assignment-weather-app.vercel.app/)

