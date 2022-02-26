from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')

if __name__ == '__main__':
    app.run(debug=True)

#### TWITTER API ####
from flask import Flask, render_template
import urllib.request, json

import os

@app.route("/")
def get_tweets():
    url = "https://api.themoviedb.org/3/discover/movie?api_key={}".format(os.environ.get("TMDB_API_KEY"))

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    return render_template ("movies.html", movies=dict["results"])