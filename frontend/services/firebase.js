import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "./config.js";

const app = initializeApp(config);

export const auth = getAuth(app);

export default app;
