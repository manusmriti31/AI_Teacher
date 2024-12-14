import React from 'react';
import { BookOpen, Award, Brain, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Every Individual Through Personalized Learning
          </h1>
          <p className="text-xl mb-8 text-teal-100">
            Bridge knowledge gaps and access economic opportunities with your AI tutor.
            Learn at your own pace, in your own way.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105">
            Get Started Now
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            {
              icon: Brain,
              title: 'Personalized Learning',
              description: 'AI-powered curriculum tailored to your unique needs and goals'
            },
            {
              icon: Users,
              title: 'Accessibility First',
              description: 'Designed for everyone, with customizable learning experiences'
            },
            {
              icon: Award,
              title: 'Skill Development',
              description: 'Earn certificates and badges as you progress in your journey'
            },
            {
              icon: BookOpen,
              title: 'Dynamic Content',
              description: 'Interactive lessons that adapt to your learning style'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <feature.icon className="h-12 w-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-teal-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}