import sys
import os
sys.path.append('/atlas-des-sports/backend')

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat():
    message = request.json['message']
    # ajout de la logique de traitement du message
    response = f"Vous avez dit : {message}"
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)