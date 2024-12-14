export const API_ENDPOINTS = {
  HUGGINGFACE: 'https://api-inference.huggingface.co/models/facebook/opt-1.3b'
} as const;

export const ROUTES = {
  HOME: '/',
  NOTEBOOK: '/notebook/:id',
  CHAPTER: '/notebook/:notebookId/chapter/:chapterId'
} as const;

export const API_KEYS = {
  HUGGINGFACE: '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'
} as const;

export const AI_MODELS = {
  TEXT: 'facebook/opt-1.3b',
  IMAGE: 'stabilityai/stable-diffusion-2-1'
} as const;