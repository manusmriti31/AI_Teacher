export const generateEducationalPrompt = (subject: string, chapterTitle: string): string => {
  return `
Create an educational lesson about ${chapterTitle} in ${subject}.

Structure:
1. Introduction
- Brief overview of ${chapterTitle}
- Why this topic is important

2. Main Concepts
- Key principles and definitions
- Fundamental ideas

3. Examples
- Real-world applications
- Step-by-step explanations

4. Practice Exercises
- Problems to solve
- Application scenarios

5. Key Takeaways
- Summary of main points
- Important concepts to remember

Please provide a well-structured, clear explanation suitable for students.`.trim();
};