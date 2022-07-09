import { AppRegistrationRounded, Home, Login, Menu, Person, QuestionMark } from "@mui/icons-material";

export default [
  {
    title: 'home',
    path: '/',
    icon: <Home />,
  },
  {
    title: 'Login',
    path: '/login',
    icon: <Login />,
  },
  {
    title: 'Register',
    path: '/register',
    icon: <AppRegistrationRounded />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Menu />,
  },
  {
    title: 'user',
    path: '/user',
    icon: <Person />,
  },
  {
    title: 'Not found',
    path: '/404',
    icon: <QuestionMark />,
  },
];
