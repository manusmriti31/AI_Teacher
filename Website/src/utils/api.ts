import { Notebook } from '../types';
import { mockNotebooks } from './mockData';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchNotebooks(): Promise<Notebook[]> {
  await delay(800);
  return mockNotebooks;
}

export async function fetchNotebookById(id: string): Promise<Notebook> {
  await delay(500);
  const notebook = mockNotebooks.find(n => n.id === id);
  if (!notebook) {
    throw new Error('Notebook not found');
  }
  return notebook;
}

export async function fetchChapterContent(chapterId: string): Promise<string> {
  await delay(500);
  return 'Chapter content will be dynamically generated...';
}

export async function getRecommendations(userId: string): Promise<Notebook[]> {
  await delay(1000);
  return mockNotebooks.slice(0, 2);
}