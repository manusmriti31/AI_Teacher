interface ChatGPTResponse {
  content: string;
}

export async function generateChapterContent(
  subject: string,
  chapterTitle: string
): Promise<string> {
  try {
    const response = await fetch(API_ENDPOINTS.OPENAI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `Generate educational content for a chapter titled "${chapterTitle}" in the subject "${subject}". Include explanations, examples, and key takeaways.`
        }],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error('Failed to generate content');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating chapter content:', error);
    throw error;
  }
}