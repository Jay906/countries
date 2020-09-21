import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;
const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=`;

async function weatherApi(capital) {
  const response = await axios.get(`${url}${capital}`);
  return response.data.current;
}

export default weatherApi;
