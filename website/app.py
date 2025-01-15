from flask import Flask, render_template, request, jsonify, session, redirect, url_for
import requests  # For making API calls
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
app.secret_key = "2645d8cc210a751536ef77a194bc8bd076bb2f0b2b35df58cc68589e5827d429"  # Required for session management

# Replace with your Gemini API key
GEMINI_API_KEY = "AIzaSyBizNZe9p4SIL0GbvHgUm92aX6IBPmw9-A"
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/notebooks')
def notebooks():
    return render_template('notebooks.html')

@app.route('/trending')
def trending():
    return render_template('trending.html')

@app.route('/roadmap')
def roadmap():
    return render_template('roadmap.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/community')
def community():
    return render_template('community.html')

@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/new-notebook')
def new_notebook():
    return render_template('new_notebook.html')

@app.route('/resume-learning')
def resume_learning():
    return render_template('resume_learning.html')

@app.route('/take-assessment')
def take_assessment():
    return render_template('take_assessment.html')

@app.route('/schedule-session')
def schedule_session():
    return render_template('schedule_session.html')

@app.route('/generate-content', methods=['POST'])
def generate_content():
    try:
        # Get form data
        data = request.json
        title = data.get('title')
        goal = data.get('goal')
        what_you_know = data.get('whatYouKnow')
        level = data.get('level')

        # Prepare the prompt for the API
        prompt = f"""
        Create a chapter-wise learning plan for a notebook titled "{title}".
        - Goal: {goal}
        - Current Knowledge: {what_you_know}
        - Level: {level}

        Directly start giving me the chapetrs contente seperated by line and no starting text or anything else.
        Make sure that the content is allined with the goal and makes use of your existing knowledge.
        The chapetr content should be well strucutred and each chapter should be of atleast 500 words.
        """

        # Prepare the request payload for Gemini API
        payload = {
            "contents": [
                {
                    "parts": [
                        {"text": prompt}
                    ]
                }
            ]
        }

        # Call the Gemini API
        headers = {
            'Content-Type': 'application/json',
        }
        response = requests.post(GEMINI_API_URL, headers=headers, json=payload)
        response.raise_for_status()  # Raise an error for bad responses

        # Extract the generated content
        generated_content = response.json().get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', 'No content generated.')

        # Split the content into chapters
        chapters = generated_content.split('\n\n')  # Assuming chapters are separated by double newlines

        # Store chapters in session
        session['chapters'] = chapters

        # Return success response
        return jsonify({'success': True, 'redirect_url': url_for('view_chapters')})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'Failed to generate content'}), 500

@app.route('/view-chapters')
def view_chapters():
    # Retrieve chapters from session
    chapters = session.get('chapters', [])
    return render_template('view_chapters.html', chapters=chapters, enumerate=enumerate)

@app.route('/view-chapter/<int:chapter_id>')
def view_chapter(chapter_id):
    # Retrieve chapters from session
    chapters = session.get('chapters', [])
    if 0 <= chapter_id < len(chapters):
        chapter_content = chapters[chapter_id]
        return render_template('view_chapter.html', chapter_content=chapter_content, chapter_id=chapter_id)
    else:
        return "Chapter not found", 404

if __name__ == '__main__':
    app.run(debug=True)