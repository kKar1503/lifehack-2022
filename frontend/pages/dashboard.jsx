// material
import { Grid, Button, Container, Stack, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import DashNav from "../components/dashNav.jsx";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../components/blog";
import ThemeProvider from "../theme";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
// mock
import POSTS from "../_mock/blog";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];
const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;
const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const fetchData = async () => {
   return await axios.get("http://localhost:4000/api/v1/event/all-events");
  };
  useEffect(() => {
    let mounted = true;
    fetchData().then((res) => {
      if (mounted)
        response.data.data.forEach((e) =>
          setEvents((oldArray) => [... oldArray, e]),
        );
    });
    return () => (mounted = false);
  }, []);

  const router = useRouter();
  const onClickCard = (event, id) => {
    // event.preventDefault();

    router.push({ pathname: "/eventDetails", query: { id: id } });
  };
  const onCreateNew = (event) => {
    // event.preventDefault();

    router.push({ pathname: "/createNewPost", query: { text: "dab" } });
  };
  return (
    <ThemeProvider>
      <RootStyle>
        <DashNav></DashNav>
        <MainStyle>
          <Page title="Home">
            <Container>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={5}
              >
                <Typography variant="h4" gutterBottom>
                  Volunteer Projects
                </Typography>
                <Button variant="contained" onClick = {onCreateNew}>Create New Event</Button>
              </Stack>

              <Stack
                mb={5}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <BlogPostsSearch posts={POSTS} />
                <BlogPostsSort options={SORT_OPTIONS} />
              </Stack>

              <Grid container spacing={3}>
                {events.map((event, index) => (
                  <BlogPostCard
                    key={event.id}
                    post={event}
                    index={index}
                    onClick={(e) => onClickCard(e, event.id)}
                  />
                ))}
              </Grid>
            </Container>
          </Page>
        </MainStyle>
      </RootStyle>
    </ThemeProvider>
  );
}
