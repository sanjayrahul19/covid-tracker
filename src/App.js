import React, { useEffect, useState } from "react";
import { fetchData } from "./api";
import "./App.css";
import Cards from "./components/cards/Cards.js";
import Chart from "./components/chart/Chart";
import CountryPicker from "./components/countryPicker/CountryPicker";
const App = () => {
  const [state, setState] = useState({
    data: {},
    country: "",
  });

  useEffect(() => {
    const mount = async () => {
      const data = await fetchData();
      setState({ data });
    };
    mount();
  }, []);

  const handleChange = async (country) => {
    const data = await fetchData(country);
    setState({ data, country: country });
  };

  console.log(state.data);
  console.log(state.country);

  const { data, country } = state;

  return (
    <div className="container">
      <img
        className="image"
        src="https://www.yorkgraphicdesigners.co.uk/wp-content/uploads/2020/04/coronavirus_logo-2-833x321.jpg"
        alt=""
      />
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
