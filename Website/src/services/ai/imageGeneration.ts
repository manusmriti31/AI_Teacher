import { API_KEYS, AI_MODELS } from '../../config/constants';
import { AIImageResponse } from './types';

export async function generateChapterImage(prompt: string): Promise<AIImageResponse> {
  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${AI_MODELS.IMAGE}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.HUGGINGFACE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: `${prompt}, educational style, digital art, clean, professional, high quality`,
        parameters: {
          negative_prompt: 'blurry, bad quality, distorted, nsfw, inappropriate',
          num_inference_steps: 30,
          guidance_scale: 7.5,
          width: 768,
          height: 512
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error (${response.status}): ${errorText}`);
    }

    const blob = await response.blob();
    if (blob.size === 0) {
      throw new Error('Generated image is empty');
    }

    return {
      url: URL.createObjectURL(blob)
    };
  } catch (error) {
    console.error('Error generating image:', error);
    
    let errorMessage = 'Failed to generate image';
    
    if (error instanceof Error) {
      if (error.message.includes('429')) {
        errorMessage = 'Image generation is currently busy. Please try again in a few moments.';
      } else if (error.message.includes('503')) {
        errorMessage = 'Image generation model is loading. Please try again in a few moments.';
      }
    }

    return {
      url: '',
      error: errorMessage
    };
  }
}