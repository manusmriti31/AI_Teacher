import { useState, useEffect } from 'react';
import { Notebook } from '../types';
import { fetchNotebooks } from '../utils/api';

export function useNotebooks() {
  const [notebooks, setNotebooks] = useState<Notebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadNotebooks = async () => {
      try {
        const data = await fetchNotebooks();
        setNotebooks(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load notebooks'));
      } finally {
        setLoading(false);
      }
    };

    loadNotebooks();
  }, []);

  return { notebooks, loading, error };
}