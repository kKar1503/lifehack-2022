import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { HomeNav } from "../components/homeNav.jsx";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
  <div id = "homepage">
<HomeNav></HomeNav>
{/* <Button variant="contained">Hello World</Button> */}
</div>
);
}
