<<<<<<< HEAD

from flask import Flask, render_template
from extractor import *
from flask import Flask, render_template, jsonify
from data import Articles
from extractor.extractorv1 import *
import json
from mysql.connector import (connection, cursor)

new_extractor = Extractor()

def getDB():
	
	conex = mysql.connector.connect(user='root', password='******', database='dublinbikes', host='0.0.0.0')
	
	return conex
=======
from flask import Flask, render_template, jsonify
from dublinbikeflask.extractor import extractorv1
import functools
import os
>>>>>>> refs/heads/tim1

app = Flask(__name__)

@app.route('/')
@functools.lru_cache(maxsize=256)
def index():
	return render_template('home.html')

@app.route('/weather')
def weather():
	return render_template('weather.html')

@app.route('/detailed')
def detailed():
	return render_template('detailed.html')

@app.route('/stations')
def stations():
<<<<<<< HEAD
	
	return render_template('stations.html')
def getStations():
	#if you replace the the above return value with this stuff then the webpage will just display the json
	new_extractor.getLatAndLong()
	
	stations = new_extractor.lat_long
	
	return jsonify(stations=stations)

@app.route('/full-map')
def fullMap():
	return render_template('full-map.html')

@app.route('/articles')
def articles():
	return render_template('articles.html', articles = Articles)

#string.id is a dynamic value
@app.route('/article/<string:id>/')
def article(id):
	return render_template('article.html', id=id)
=======
	return render_template('stations.html', x=os.path.join(app.instance_path))

@app.route('/_map_data')
def add_numbers():
	recent = extractorv1.Extractor()
	return jsonify(recent.getRecent())
>>>>>>> refs/heads/tim1

if __name__ == '__main__':
	app.run(debug=True)

