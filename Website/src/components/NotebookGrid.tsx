import React from 'react';
import { Book, Code, Calculator, Globe, Microscope } from 'lucide-react';

const notebooks = [
  { icon: Book, title: 'English Literature', progress: 65 },
  { icon: Calculator, title: 'Mathematics', progress: 40 },
  { icon: Code, title: 'Programming', progress: 30 },
  { icon: Globe, title: 'Geography', progress: 80 },
  { icon: Microscope, title: 'Science', progress: 55 }
];

export default function NotebookGrid() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Notebooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {notebooks.map((notebook, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
            >
              <notebook.icon className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{notebook.title}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-teal-600 rounded-full h-2"
                  style={{ width: `${notebook.progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">{notebook.progress}% Complete</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}