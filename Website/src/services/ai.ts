import { API_ENDPOINTS, API_KEYS } from '../config/constants';

interface GenerateContentParams {
  subject: string;
  chapterTitle: string;
}

export async function generateChapterContent({ subject, chapterTitle }: GenerateContentParams): Promise<string> {
  try {
    const prompt = `Generate a detailed educational lesson about ${chapterTitle} in the subject of ${subject}. Include explanations, examples, and key takeaways.`;
    
    const response = await fetch(API_ENDPOINTS.HUGGINGFACE, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.HUGGINGFACE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_length: 1000,
          temperature: 0.7,
          top_p: 0.9,
          do_sample: true
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate content');
    }

    const data = await response.json();
    return data[0].generated_text;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

export async function generateChapterImage(prompt: string): Promise<string> {
  try {
    const response = await fetch('https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEYS.HUGGINGFACE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate image');
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
}