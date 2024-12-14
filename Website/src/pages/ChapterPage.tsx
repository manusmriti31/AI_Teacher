import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useNotebook } from '../hooks/useNotebook';
import { generateChapterContent } from '../services/openai';

export default function ChapterPage() {
  const { notebookId, chapterId } = useParams<{ notebookId: string; chapterId: string }>();
  const { notebook, loading: notebookLoading } = useNotebook(notebookId);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadChapterContent() {
      if (!notebook) return;
      
      const chapter = notebook.chapters.find(c => c.id === chapterId);
      if (!chapter) return;

      try {
        setLoading(true);
        const generatedContent = await generateChapterContent(notebook.subject, chapter.title);
        setContent(generatedContent);
      } catch (err) {
        setError('Failed to load chapter content');
      } finally {
        setLoading(false);
      }
    }

    loadChapterContent();
  }, [notebook, chapterId]);

  if (notebookLoading) return <div className="text-center py-8">Loading...</div>;
  if (!notebook) return <div className="text-center py-8">Notebook not found</div>;

  const chapter = notebook.chapters.find(c => c.id === chapterId);
  if (!chapter) return <div className="text-center py-8">Chapter not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link
          to={`/notebook/${notebookId}`}
          className="inline-flex items-center text-teal-600 hover:text-teal-700"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Notebook</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{chapter.title}</h1>
        
        {loading && (
          <div className="text-center py-8">Loading chapter content...</div>
        )}

        {error && (
          <div className="text-center py-8 text-red-600">{error}</div>
        )}

        {!loading && !error && (
          <div className="prose max-w-none">
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}