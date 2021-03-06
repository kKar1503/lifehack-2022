import { useState } from "react";
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
import { signup } from "../services/services";
import axios from "axios";

const theme = createTheme();

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const [error, setError] = useState("");

	const onSubmit = (event) => {
		console.log({
			email: getValues("email"),
			password: getValues("password"),
			firstName: getValues("firstName"),
			lastName: getValues("lastName"),
		});
		signup(getValues("email"), getValues("password"))
			.then(async (creds) => {
				let token = await creds.user.getIdToken();
				axios.post(
					"http://localhost:4000/api/v1/signup",
					{
						firstName: getValues("firstName"),
						lastName: getValues("lastName"),
					},
					{
						headers: {
							Authorization: "Bearer " + token,
						},
					}
				);
			})
			.catch((e) => setError("Email is in use."));
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
							backgroundImage:
								"url(https://source.unsplash.com/random)",
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
									{errors.email &&
										errors.email.type === "required" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												This is required field
											</span>
										)}
									{errors.email &&
										errors.email.type === "pattern" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
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
										pattern:
											/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/,
									})}
								/>
								<Box>
									{errors.password &&
										errors.password.type === "required" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												This is required field
											</span>
										)}
									{errors.password &&
										errors.password.type ===
											"minLength" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												Password needs to be at least 8
												characters
											</span>
										)}
									{errors.password &&
										errors.password.type === "pattern" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												Password must be alphanumeric
											</span>
										)}
								</Box>
								<TextField
									margin="normal"
									// required
									fullWidth
									name="firstName"
									label="First Name"
									type="text"
									id="outlined-first-name-input"
									autoComplete="first-name"
									{...register("firstName", {
										required: true,

										pattern: /^[a-zA-Z]+$/,
									})}
								/>
								<Box>
									{errors.name &&
										errors.name.type === "required" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												This is required field
											</span>
										)}
									{errors.name &&
										errors.name.type === "pattern" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												Invalid Name
											</span>
										)}
								</Box>
								<TextField
									margin="normal"
									// required
									fullWidth
									name="lastName"
									label="Last Name"
									type="text"
									id="outlined-last-name-input"
									autoComplete="last-name"
									{...register("lastName", {
										required: true,

										pattern: /^[a-zA-Z]+$/,
									})}
								/>
								<Box>
									{errors.name &&
										errors.name.type === "required" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												This is required field
											</span>
										)}
									{errors.name &&
										errors.name.type === "pattern" && (
											<span
												className="error-message"
												style={{
													color: "rgba(255,0,0,0.9)",
													fontSize: "12px",
												}}
											>
												Invalid Name
											</span>
										)}
								</Box>
								<span style={{ color: "red" }}>{error}</span>
								<br />
								<FormControlLabel
									control={
										<Checkbox
											value="remember"
											color="primary"
										/>
									}
									label="Remember me"
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>
								<Grid container>
									<Grid item>
										<Link href="/login" variant="body2">
											{"Already have an account? Login"}
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
