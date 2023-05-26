import { useState } from "react";
import getData from "./api";
import SearchBar from "./SearchBar";
import DataList from "./DataList";
import InitialScreen from "./InitialScreen";
import Clear_Day from "./SVGs/clear-day.svg";
import Clear_Night from "./SVGs/clear-night.svg";
import Cloudy from "./SVGs/cloudy.svg";
import Fog from "./SVGs/fog.svg";
import Hail from "./SVGs/hail.svg";
import Partly_Cloudy_Day from "./SVGs/partly-cloudy-day.svg";
import Partly_Cloudy_Night from "./SVGs/partly-cloudy-night.svg";
import Rain_Snow_Showers_Day from "./SVGs/rain-snow-showers-day.svg";
import Rain_Snow_Showers_Night from "./SVGs/rain-snow-showers-night.svg";
import Rain from "./SVGs/rain.svg";
import Showers_Day from "./SVGs/showers-day.svg";
import Showers_Night from "./SVGs/showers-night.svg";
import Sleet from "./SVGs/sleet.svg";
import Snow_Showers_Day from "./SVGs/snow-showers-day.svg";
import Snow_Showers_Night from "./SVGs/snow-showers-night.svg";
import Snow from "./SVGs/snow.svg";
import Thunder_Rain from "./SVGs/thunder-rain.svg";
import Thunder_Showers_Day from "./SVGs/thunder-showers-day.svg";
import Thunder_Showers_Night from "./SVGs/thunder-showers-night.svg";
import Thunder from "./SVGs/thunder.svg";
import Wind from "./SVGs/wind.svg";

function App() {
  const [datas, setDatas] = useState([]);
  const [error, setError] = useState(true);

  const svgMap = {
    "clear-day": Clear_Day,
    "clear-night": Clear_Night,
    cloudy: Cloudy,
    fog: Fog,
    hail: Hail,
    "partly-cloudy-day": Partly_Cloudy_Day,
    "partly-cloudy-night": Partly_Cloudy_Night,
    "rain-snow-showers-day": Rain_Snow_Showers_Day,
    "rain-snow-showers-night": Rain_Snow_Showers_Night,
    rain: Rain,
    sleet: Sleet,
    snow: Snow,
    "showers-day": Showers_Day,
    "showers-night": Showers_Night,
    thunder: Thunder,
    "snow-showers-day": Snow_Showers_Day,
    "snow-showers-night": Snow_Showers_Night,
    wind: Wind,
    "thunder-rain": Thunder_Rain,
    "thunder-showers-day": Thunder_Showers_Day,
    "thunder-showers-night": Thunder_Showers_Night,
  };

  const handleSubmit = async (term) => {
    try {
      const result = await getData(term);
      setDatas(result);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="font-link">
      <SearchBar onSubmit={handleSubmit} datas={datas} />
      {error ? <InitialScreen /> : <DataList datas={datas} svgMap={svgMap} />}
    </div>
  );
}

export default App;
