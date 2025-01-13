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

if __name__ == '__main__':
    app.run(debug=True)