import axios from "axios";
const url = `http://api.weatherstack.com/current?access_key=7134766cead0eeb695604b7d006a0387&query=`;

async function weatherApi(capital) {
  const response = await axios.get(`${url}${capital}`);
  return response.data.current;
}

export default weatherApi;
