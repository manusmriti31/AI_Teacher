import React from 'react';
import { ChevronRight, BookOpen } from 'lucide-react';
import { Notebook } from '../../types';

interface Props {
  notebook: Notebook;
  onClick: (notebook: Notebook) => void;
}

export default function NotebookCard({ notebook, onClick }: Props) {
  return (
    <div 
      onClick={() => onClick(notebook)}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer group"
    >
      <div className="flex items-start justify-between">
        <div>
          <BookOpen className="h-12 w-12 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{notebook.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{notebook.description}</p>
        </div>
        <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-teal-600 transition" />
      </div>
      
      <div className="space-y-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-teal-600 rounded-full h-2 transition-all duration-500"
            style={{ width: `${notebook.progress}%` }}
          />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">{notebook.progress}% Complete</span>
          <span className="text-gray-500">{notebook.chapters.length} Chapters</span>
        </div>
      </div>
    </div>
  );
}