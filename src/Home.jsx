import React from "react";
import "./App.css";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import usefull from "../Data/data";
import rice from "/shopping.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

/*
<Typography variant="h5" color="initial">
  Unit
</Typography>
<Typography variant="h5" color="initial">
  Amount
</Typography>
<Typography variant="h5" color="initial">
  Ammount_g
</Typography>
<Typography variant="h5" color="initial">
  Food
</Typography>
*/

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      p={2}
      flexDirection="column"
    >
      <Grid item>
        <Typography variant="h1" color="initial">
          Your Last Order
        </Typography>
      </Grid>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={rice}
          />
          <CardContent>
            <Typography
              variant="h5"
              color="initial"
              sx={{ textTransform: "capitalize" }}
            >
              Unit: {usefull.last.unit}
            </Typography>
            <Typography variant="h5" color="initial">
              Amount: {usefull.last.amount}
            </Typography>
            <Typography variant="h5" color="initial">
              Ammount_g: {usefull.last.amount_g}
            </Typography>
            <Typography
              variant="h5"
              color="initial"
              sx={{ textTransform: "capitalize" }}
            >
              Food: {usefull.last.food}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        mt={10}
        mb={6}
      >
        <Grid item>
          <Typography variant="h5" color="initial">
            Total Orders in Last week
          </Typography>
          <Typography variant="h1" color="initial">
            {usefull.totalOrderWeek}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="initial">
            Total grams consumed in last week
          </Typography>
          <Typography variant="h1" color="initial">
            {usefull.totalGmWeek}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
