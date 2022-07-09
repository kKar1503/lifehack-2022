import { React } from "react";
import { useForm } from "react-hook-form";
import { HomeNav } from "../components/homeNav.jsx";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <div>
      <HomeNav></HomeNav>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                {/* EMAIL */}
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
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
                {/* PASSWORD */}
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="outlined-password-input"
                  autoComplete="current-password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/,
                  })}
                />
                <Box>
                  {errors.password && errors.password.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Password needs to be at least 8 characters
                    </span>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Password must be alphanumeric
                    </span>
                  )}
                </Box>
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Name"
                  type="text"
                  id="outlined-name-input"
                  autoComplete="current-password"
                  {...register("name", {
                    required: true,

                    pattern: /^[a-zA-Z]+$/,
                  })}
                />
                <Box>
                  {errors.name && errors.name.type === "required" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      This is required field
                    </span>
                  )}
                  {errors.name && errors.name.type === "pattern" && (
                    <span
                      className="error-message"
                      style={{ color: "rgba(255,0,0,0.9)", fontSize: "12px" }}
                    >
                      Invalid Name
                    </span>
                  )}
                </Box>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
