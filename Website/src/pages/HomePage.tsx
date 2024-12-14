import React from 'react';
import Hero from '../components/Hero';
import NotebookList from '../components/notebooks/NotebookList';
import RecommendedNotebooks from '../components/recommendations/RecommendedNotebooks';
import { useNotebooks } from '../hooks/useNotebooks';

export default function HomePage() {
  const { notebooks: recommendations, loading, error } = useNotebooks();

  return (
    <>
      <Hero />
      <NotebookList />
      <RecommendedNotebooks
        recommendations={recommendations}
        loading={loading}
        error={error}
      />
    </>
  );
}