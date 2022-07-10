import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
import DashNav from "../components/dashNav.jsx";
import axios from "axios";
import { alpha, styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";
function EventDetails({ router }) {
  const [event, setEvent] = useState({});

  const fetchData = async () => {
    console.log(router.query.id);
    return await axios.get(
      `http://localhost:4000/api/v1/event/${router.query.id}`,
    );
  };
  useEffect(() => {
    let mounted = true;
    if (router.query.id) {
      fetchData().then((res) => {
        if (mounted) setEvent(res.data.data);
      });
    }

    return () => (mounted = false);
  }, []);

  return (
    <Container sx={{ paddingTop: "108px" }}>
      <DashNav></DashNav>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          alignItems: "flex-start",
          margin: "30px",
          padding: "16px",
          border: "1px solid lightskyblue",
          backgroundImage: `/static/mock-images/avatars/avatar_${
            router.query.index + 1
          }.jpg`,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {event.name} Details
        </Typography>
        <br />
        <br />
        <Typography variant="caption" gutterBottom sx={{ fontSize: "24px" }}>
          {event.description}
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ fontSize: "16px" }}>
          {new Date(event.start_date).toDateString()} to{" "}
          {new Date(event.end_date).toDateString()}
        </Typography>
        <br />
        <br />
        <Container
          sx={{
            backgroundColor: "rgba(87,131,219,0.7)",
            padding: "16px",
            borderRadius: "8px",
            width: "fit-content",
            marginLeft: "0px"
            
          }}
        >
          <Typography variant="caption" sx={{ color: "white" }}>
            Organised by: {event.organiser}
          </Typography>
        </Container>
      </Box>
    </Container>
  );
}
export default withRouter(EventDetails);
