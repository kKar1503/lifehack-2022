import Head from 'next/head';
import Image from 'next/image';
import React, { Component } from 'react';
import Link from "next/link";
import { HomeNav } from "../components/homeNav.jsx";
import BannerImage from "../assets/volunteerGroup.jpg";

export default function Home() {
  return (
      <div>
        <HomeNav></HomeNav>
        <div className="home">
          <div className="headerContainer">
            <h1> Looking To Make A Difference? </h1>
            <p> Find a project now! </p>s
            <Link href="/register">
              <button> REGISTER NOW </button>
            </Link>
          </div>
        </div>
      </div>
  );
}
