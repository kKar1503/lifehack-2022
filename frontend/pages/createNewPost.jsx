import React, { useEffect } from "react";
import { withRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
const theme = createTheme();
function CreateNewPost({ router }) {
  useEffect(() => {
    console.log(router.query.text);
  }, [router.query]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    // event.preventDefault();
    console.log("Dab");
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="65%">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Create New Event
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  // required
                  helperText="dd/mm/yyyy"
                  fullWidth
                  id="startDate"
                  label="Start Date"
                  name="startDate"
                  autoFocus
                  {...register("startDate", {
                    required: true,
                    pattern: /\S+\/\S+\/\S+/,
                  })}
                />
                <Box>
                  {errors.startDate && errors.startDate.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.startDate && errors.startDate.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Invalid Date
                    </span>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  // required
                  helperText="dd/mm/yyyy"
                  fullWidth
                  id="endDate"
                  label="End Date"
                  name="endDate"
                  type="endDate"
                  autoFocus
                  {...register("endDate", {
                    required: true,
                    pattern: /\S+\/\S+\/\S+/,
                  })}
                />
                <Box>
                  {errors.endDate && errors.endDate.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.endDate && errors.endDate.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Invalid Date
                    </span>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  id="organiser"
                  label="Organiser"
                  name="organiser"
                  autoComplete="organiser"
                  autoFocus
                  {...register("organiser", {
                    required: true,
                    // pattern: /\S+@\S+\.\S+/,
                  })}
                />
                <Box>
                  {errors.email && errors.email.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {/* {errors.email && errors.email.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Enter a valid email
                    </span>
                  )} */}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  // required
                  multiline
                  rows={4}
                  fullWidth
                  id="description"
                  label="Event Description"
                  name="description"
                  autoComplete="description"
                  autoFocus
                  {...register("email", {
                    required: true,
                    pattern: /\S+@\S+\.\S+/,
                  })}
                />
                <Box>
                  {errors.email && errors.email.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Enter a valid email
                    </span>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  // required
                  helperText="Number of volunteers required"
                  fullWidth
                  id="slots"
                  label="Slots"
                  name="slots"
                  autoFocus
                  {...register("slots", {
                    required: true,
                    pattern: /[^[0-9]*$]/,
                  })}
                />
                <Box>
                  {errors.slots && errors.slots.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.slots && errors.slots.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Invalid number of volunteers
                    </span>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "12px",
                padding: "16px",
                backgroundColor: "rgba(87,131,219,0.7)",
              }}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default withRouter(CreateNewPost);
