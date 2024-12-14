import React from 'react';
import { Notebook } from '../../types';
import RecommendedNotebookCard from './RecommendedNotebookCard';

interface Props {
  recommendations: Notebook[];
  loading: boolean;
  error: Error | null;
}

export default function RecommendedNotebooks({ recommendations, loading, error }: Props) {
  if (loading) return <div className="text-center py-8">Loading recommendations...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Failed to load recommendations</div>;

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Recommended for You</h2>
          <p className="text-gray-600">Based on market demand and your interests</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.slice(0, 3).map((notebook) => (
            <RecommendedNotebookCard
              key={notebook.id}
              notebook={notebook}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}