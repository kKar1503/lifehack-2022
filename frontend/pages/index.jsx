import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { HomeNav } from "../components/homeNav.jsx";


export default function Home() {
  return (
  <div id = "homepage">
<HomeNav></HomeNav>
{/* <Button variant="contained">Hello World</Button> */}
</div>
);
}
