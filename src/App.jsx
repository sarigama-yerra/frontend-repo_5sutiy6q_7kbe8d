import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import StoryAndVideo from './components/StoryAndVideo';
import PixelTurtle3DGallery from './components/PixelTurtle3DGallery';
import Roadmap from './components/Roadmap';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero with Spline cover */}
      <HeroSplineCover />

      {/* Story + Intro Video */}
      <StoryAndVideo />

      {/* Pixel Turtle 3D Models Gallery */}
      <PixelTurtle3DGallery />

      {/* Roadmap */}
      <Roadmap />

      {/* Footer */}
      <footer className="py-10 border-t border-neutral-200 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Bitcoin Turtles. Community-driven art project.
      </footer>
    </div>
  );
}
