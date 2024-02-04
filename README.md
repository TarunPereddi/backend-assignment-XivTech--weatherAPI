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

4. Replace the API key in the `api.txt` file with your own API key from Visual Crossing. If you don't have an API key, you can use the one provided in the `api.txt` file.

## Usage

1. Start the server:

   ```
   npm start
   ```

2. Use an application like Postman or Hoppscotch to send a POST request to the `https://localhost:5000/weather` endpoint with a body similar to this:

   ```json
   {
     "cities": [ "toronto", "mumbai", "london" ]
   }
   ```

The output will be similar to this:

```json
{
  "toronto": "24C",
  "mumbai": "34C",
  "london": "14C"
}
```

Please note that the temperatures are just examples and will vary based on the actual weather conditions.