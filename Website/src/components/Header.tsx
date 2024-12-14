import React from 'react';
import { BookOpenCheck, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-teal-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpenCheck className="h-8 w-8" />
            <span className="text-xl font-bold">Inclusive AI Tutor</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-teal-200 transition">Home</a>
            <a href="/notebooks" className="hover:text-teal-200 transition">My Notebooks</a>
            <a href="/recommended" className="hover:text-teal-200 transition">Recommended</a>
            <a href="/about" className="hover:text-teal-200 transition">About Us</a>
            <a href="/contact" className="hover:text-teal-200 transition">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-lg flex items-center space-x-2 transition">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}