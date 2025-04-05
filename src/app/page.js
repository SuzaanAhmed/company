"use client";
import React from "react";
import Link from "next/link";
import ServicesCarousel from "./carousel/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <ServicesCarousel/>
    </div>
  );
}
