import React from 'react';
import { ChevronRight, BookOpen, TrendingUp } from 'lucide-react';
import { Notebook } from '../../types';

interface Props {
  notebook: Notebook;
  onClick: (notebook: Notebook) => void;
}

export default function RecommendedNotebookCard({ notebook, onClick }: Props) {
  // Mock market demand percentages - in a real app, these would come from an API
  const marketDemand = Math.floor(Math.random() * (95 - 75) + 75);
  
  return (
    <div 
      onClick={() => onClick(notebook)}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <BookOpen className="h-12 w-12 text-teal-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{notebook.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{notebook.description}</p>
        </div>
        <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-teal-600 transition" />
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-orange-500" />
            <span className="text-sm text-gray-600">Market Demand</span>
          </div>
          <span className="text-sm font-semibold text-orange-500">{marketDemand}%</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {notebook.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}