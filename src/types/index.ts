export interface Notebook {
  id: string;
  title: string;
  subject: string;
  description: string;
  tags: string[];
  progress: number;
  chapters: Chapter[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  notebookId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    subjects: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };
}