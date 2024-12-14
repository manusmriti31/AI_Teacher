export interface GenerateContentParams {
  subject: string;
  chapterTitle: string;
}

export interface AIResponse {
  content: string;
  error?: string;
}

export interface AIImageResponse {
  url: string;
  error?: string;
}