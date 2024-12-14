export const API_ENDPOINTS = {
  OPENAI: 'https://api.openai.com/v1/chat/completions'
} as const;

export const ROUTES = {
  HOME: '/',
  NOTEBOOK: '/notebook/:id',
  CHAPTER: '/notebook/:notebookId/chapter/:chapterId'
} as const;