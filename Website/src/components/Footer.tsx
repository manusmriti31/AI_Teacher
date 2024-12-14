import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Inclusive AI Tutor</h3>
            <p className="text-gray-400">
              Empowering every individual through personalized learning and accessible education.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/help" className="hover:text-white transition">Help Center</a></li>
              <li><a href="/community" className="hover:text-white transition">Community</a></li>
              <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition"><Github className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Inclusive AI Tutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}