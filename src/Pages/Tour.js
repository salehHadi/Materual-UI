import {
  Container,
  Typography,
  Box,
  Paper,
  BottomNavigation,
} from "@mui/material";
import ImageGroup from "../components/ImageGroup";
import CustomizedAccordions from "../components/Accordiant";
import BasicModal from "../components/Modul";
import React from "react";

const Tour = () => {
  return (
    <>
      <Container sx={{ width: 900 }}>
        <Typography variant="h3" component="h1" marginTop={3}>
          Immerese into the Falls
        </Typography>

        <Box sx={{ display: "flex", marginTop: 5 }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-JXV1hGCXK5q3V9F1J_R4cBYEiBspDi2jg&usqp=CAU"
            alt=""
            height={325}
            style={{ marginRight: 5 }}
          />
          <ImageGroup />
        </Box>
        <Box>
          <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
          </Typography>
          <Typography variant="paragraph" component="p">
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati
            ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident
            nemo architecto deserunt magnam praesentium natus impedit tenetur
            dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus
            voluptatum mollitia odio eligendi
          </Typography>
        </Box>
        <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3}>
            Frequently asked Questions
          </Typography>
          <CustomizedAccordions />
        </Box>

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation>
            <BasicModal />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
};

export default Tour;
