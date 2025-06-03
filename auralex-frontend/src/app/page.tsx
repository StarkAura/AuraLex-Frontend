"use client";
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { Web3Section } from "@/components/sections";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <Web3Section />
    </main>
  );
};

export default HomePage;
