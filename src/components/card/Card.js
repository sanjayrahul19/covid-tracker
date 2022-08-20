import React from "react";
import { Grid, Typography, Card as Cards, CardContent } from "@mui/material";
import CountUp from "react-countup";
const Card = ({ classNames, title, value, date, description }) => {
  return (
    <Grid item component={Cards} className={classNames} xs={12} md={3}>
      <CardContent>
        <Typography color="GrayText">{title}</Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={3} separator="," />
        </Typography>
        <Typography color="GrayText">{date}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default Card;
