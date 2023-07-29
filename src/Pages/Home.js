import TourCard from "../components/TourCard";
import { Container, Grid, Typography } from "@mui/material/";
import cityes from "../components/data.json";
import React from "react";

const Home = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {cityes.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>

              <Grid container spacing={5}>
                {city.tours.map((tour) => {
                  return <TourCard tour={tour} key={tour.id} />;
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
