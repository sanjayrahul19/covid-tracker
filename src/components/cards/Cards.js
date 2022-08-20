import React from "react";
import "./Cards.css";
import Card from "../card/Card";
import { Grid } from "@mui/material";
import cx from "classnames";
const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return <h1>Still Loading...</h1>;
  }

  return (
    <div className="container">
      <Grid container spacing={3} justifyContent="center">
        <Card
          classNames={cx("card", "infected")}
          title="Infected"
          value={confirmed.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of active cases of COVID-19"
        />
        <Card
          classNames={cx("card", "recovered")}
          title="Recovered"
          value={recovered.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of recoveries COVID-19"
        />
        <Card
          classNames={cx("card", "deaths")}
          title="Deaths"
          value={deaths.value}
          date={new Date(lastUpdate).toDateString()}
          description="Number of deaths caused by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
