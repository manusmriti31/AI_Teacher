import { API_ENDPOINTS, API_KEYS } from '../../config/constants';
import { GenerateContentParams, AIResponse } from './types';
import { generateEducationalPrompt } from './prompts';

export async function generateChapterContent({ subject, chapterTitle }: GenerateContentParams): Promise<AIResponse> {
  try {
    const prompt = generateEducationalPrompt(subject, chapterTitle);
    
    const response = await fetch(API_ENDPOINTS.HUGGINGFACE, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.HUGGINGFACE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 1000,
          temperature: 0.8,
          top_p: 0.95,
          do_sample: true,
          return_full_text: false,
          num_return_sequences: 1
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    
    if (!Array.isArray(data) || !data[0]?.generated_text) {
      throw new Error('Invalid response format from API');
    }

    const content = data[0].generated_text.trim();
    
    if (!content) {
      throw new Error('Generated content is empty');
    }

    return { content };
  } catch (error) {
    console.error('Error generating content:', error);
    
    let errorMessage = 'An unexpected error occurred';
    
    if (error instanceof Error) {
      if (error.message.includes('429')) {
        errorMessage = 'The AI model is currently busy. Please try again in a few moments.';
      } else if (error.message.includes('401')) {
        errorMessage = 'Authentication error. Please check your API key.';
      } else if (error.message.includes('503')) {
        errorMessage = 'The AI model is currently loading. Please try again in a few moments.';
      }
    }

    return {
      content: 'We apologize, but we could not generate the content at this moment. Please try again later.',
      error: errorMessage
    };
  }
}