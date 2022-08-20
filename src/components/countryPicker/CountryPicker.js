import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import { FormControl, NativeSelect } from "@mui/material";

const CountryPicker = ({ handleChange }) => {
  const [fetchedCountry, setFetchedCountry] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountry(await fetchCountries());
    };
    fetchApi();
  }, []);

  return (
    <div>
      <FormControl className="formControl">
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value="">Global</option>
          {fetchedCountry.map((country, index) => {
            return (
              <option key={index} value={country}>
                {country}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
