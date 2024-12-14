import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen } from 'lucide-react';
import { useNotebook } from '../hooks/useNotebook';

export default function NotebookPage() {
  const { id } = useParams<{ id: string }>();
  const { notebook, loading, error } = useNotebook(id);

  if (loading) return <div className="text-center py-8">Loading notebook...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Failed to load notebook</div>;
  if (!notebook) return <div className="text-center py-8">Notebook not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center text-teal-600 hover:text-teal-700"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Notebooks</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="h-12 w-12 text-teal-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{notebook.title}</h1>
            <p className="text-gray-600">{notebook.description}</p>
          </div>
        </div>

        <div className="grid gap-4">
          {notebook.chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/notebook/${notebook.id}/chapter/${chapter.id}`}
              className="p-4 border rounded-lg hover:bg-gray-50 transition flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-lg">{chapter.title}</h3>
                {chapter.completed && (
                  <span className="text-sm text-green-600">Completed</span>
                )}
              </div>
              <ChevronLeft className="h-5 w-5 transform rotate-180" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}