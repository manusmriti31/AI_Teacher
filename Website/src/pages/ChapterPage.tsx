import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, RefreshCw } from 'lucide-react';
import { useNotebook } from '../hooks/useNotebook';
import { generateChapterContent, generateChapterImage } from '../services/ai';

export default function ChapterPage() {
  const { notebookId, chapterId } = useParams<{ notebookId: string; chapterId: string }>();
  const { notebook, loading: notebookLoading } = useNotebook(notebookId);
  const [content, setContent] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    async function loadChapterContent() {
      if (!notebook) return;
      
      const chapter = notebook.chapters.find(c => c.id === chapterId);
      if (!chapter) return;

      try {
        setLoading(true);
        setError(null);
        
        // Generate text content
        const textResponse = await generateChapterContent({
          subject: notebook.subject,
          chapterTitle: chapter.title
        });

        if (textResponse.error) {
          setError(textResponse.error);
        } else {
          setContent(textResponse.content);
        }

        // Only try to generate image if text generation succeeded
        if (!textResponse.error) {
          const imagePrompt = `Educational illustration for ${chapter.title} in ${notebook.subject}`;
          const imageResponse = await generateChapterImage(imagePrompt);
          
          if (imageResponse.url) {
            setImageUrl(imageResponse.url);
          }
        }
      } catch (err) {
        setError('Failed to load chapter content. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadChapterContent();
  }, [notebook, chapterId, retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

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
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
            <p>Generating your personalized lesson...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={handleRetry}
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && (
          <div className="prose max-w-none">
            {imageUrl && (
              <div className="mb-8">
                <img 
                  src={imageUrl} 
                  alt={`Illustration for ${chapter.title}`}
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>
            )}
            {content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}