import { useState, useEffect } from 'react';
import { Notebook } from '../types';
import { fetchNotebookById } from '../utils/api';

export function useNotebook(id: string | undefined) {
  const [notebook, setNotebook] = useState<Notebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadNotebook = async () => {
      try {
        const data = await fetchNotebookById(id);
        setNotebook(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load notebook'));
      } finally {
        setLoading(false);
      }
    };

    loadNotebook();
  }, [id]);

  return { notebook, loading, error };
}