import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from 'next/image'
import logo from "../assets/volunteerLogo.png";

export function HomeNav() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}

          <Link href="/">
            
            <Typography variant="h6" component="div" color = "common.white" sx={{ flexGrow: 1 }}>
             Charity App
            </Typography>
          </Link>
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link href="/register">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>

  );
}
