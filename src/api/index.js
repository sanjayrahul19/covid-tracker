import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => {
      return {
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      };
    });
    console.log(modifiedData);
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const countryName = countries.map((country) => country.name);
    return countryName;
  } catch (err) {
    console.log(err);
  }
};
