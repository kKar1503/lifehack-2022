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
    <div className="navbar">
          <div className="leftSide">
            <Image
              src={logo}
              width={100}
              height={100}
            />
          </div>
          <div className="rightSide">
              <Link href="/"> Home </Link>
              <Link href="/login"> Login </Link>
              <Link href="/register"> Register </Link>
          </div>
        </div>
  );
}
