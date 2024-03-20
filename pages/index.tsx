"use client";

import HomePage from "./HomePage";
import Hero from "@/components/HomePage/Hero/Hero";
import Services from "@/components/HomePage/Services/Services";
import Searchbar from "@/components/HomePage/SearchBar/Searchbar";


export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Searchbar />
      <HomePage />
    </div>
  );
}