import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import NotebookCard from './NotebookCard';
import CreateNotebookModal from './CreateNotebookModal';
import { useNotebooks } from '../../hooks/useNotebooks';
import { Notebook } from '../../types';

export default function NotebookList() {
  const { notebooks, loading, error } = useNotebooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNotebookClick = (notebook: Notebook) => {
    // Handle notebook click - implement navigation or expansion
    console.log('Notebook clicked:', notebook);
  };

  const handleCreateNotebook = (data: any) => {
    // Handle notebook creation - implement API call
    console.log('Create notebook:', data);
    setIsModalOpen(false);
  };

  if (loading) return <div className="text-center py-8">Loading notebooks...</div>;
  if (error) return <div className="text-center py-8 text-red-600">Failed to load notebooks</div>;

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">My Notebooks</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            <PlusCircle className="h-5 w-5" />
            <span>Create Notebook</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notebooks.map((notebook) => (
            <NotebookCard
              key={notebook.id}
              notebook={notebook}
              onClick={handleNotebookClick}
            />
          ))}
        </div>

        <CreateNotebookModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreateNotebook}
        />
      </div>
    </div>
  );
}