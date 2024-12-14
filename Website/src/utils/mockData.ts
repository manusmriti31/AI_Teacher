import { Notebook } from '../types';

export const mockNotebooks: Notebook[] = [
  {
    id: '1',
    title: 'Introduction to Python',
    subject: 'Programming',
    description: 'Learn Python programming from scratch with hands-on exercises',
    tags: ['programming', 'beginner', 'python'],
    progress: 65,
    chapters: [
      { id: '1-1', title: 'Getting Started', content: '', completed: true, notebookId: '1' },
      { id: '1-2', title: 'Basic Syntax', content: '', completed: true, notebookId: '1' },
      { id: '1-3', title: 'Control Flow', content: '', completed: false, notebookId: '1' }
    ],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'Web Development Fundamentals',
    subject: 'Programming',
    description: 'Master HTML, CSS, and JavaScript basics',
    tags: ['web', 'frontend', 'html', 'css', 'javascript'],
    progress: 40,
    chapters: [
      { id: '2-1', title: 'HTML Basics', content: '', completed: true, notebookId: '2' },
      { id: '2-2', title: 'CSS Styling', content: '', completed: false, notebookId: '2' }
    ],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '3',
    title: 'Data Structures',
    subject: 'Computer Science',
    description: 'Understanding fundamental data structures and algorithms',
    tags: ['algorithms', 'computer science', 'advanced'],
    progress: 25,
    chapters: [
      { id: '3-1', title: 'Arrays and Lists', content: '', completed: true, notebookId: '3' },
      { id: '3-2', title: 'Stacks and Queues', content: '', completed: false, notebookId: '3' }
    ],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25')
  }
];