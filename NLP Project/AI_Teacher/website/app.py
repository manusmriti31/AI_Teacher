from flask import Flask, render_template

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)