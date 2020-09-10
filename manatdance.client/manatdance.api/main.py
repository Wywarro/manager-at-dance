from flask import Flask, jsonify
from flask_cors import cross_origin
app = Flask(__name__)

tasks = [
    {
        'id': 'wwww'
    },
    {
        'id': 'w dupach sie poprzewracalo'
    }
]

@app.route('/')
@cross_origin()
def index():
    return jsonify({'tasks': tasks})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)