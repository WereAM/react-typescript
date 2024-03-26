import React from "react";
import { createContext, useState, useContext } from "react";

// you can use either type or interface
interface WeatherContextType{
    weather : string;
    changeWeather : () => void;
}

export const WeatherContext = createContext<WeatherContextType | null> (null);
// OR....
// export const WeatherContext = createContext<WeatherContextType> ({
//     weather : " ",
//     changeWeather : () => {},
// });

const Context = () => {
//   const [weather, setWeather] = useState<"🌧️" | "🌞">("🌞");
//   const [weather, setWeather] = useState<string>("🌞");
//   const [weather, setWeather] = useState<"🌞">("🌞");
//   const [weather, setWeather] = useState<"🌧️">("🌞");
  const [weather, setWeather] = useState("🌞");

  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}>
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => {
  return <Estonia />;
};

const Estonia = () => {
  return <Tallinn />;
};

const Tallinn = () => {

  const { weather, changeWeather } = useContext(WeatherContext)!;

  return <button onClick={changeWeather}>{weather}</button>;
};

export default Context;