"use client"
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />

    </main>
  )
}

export default HomePage;
