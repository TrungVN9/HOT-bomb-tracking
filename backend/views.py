from flask import Blueprint, render_template, request, flash, redirect, url_for, jsonify
from .models import Sighting, sightings_schema
from . import db
import datetime
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

engine = create_engine('sqlite:///database.db')
session = Session(engine, future=True)

views = Blueprint('views', __name__)

@views.route('/', methods=['GET','POST'])
def enter_sighting():
    if request.method == 'GET':
        current_time = datetime.datetime.utcnow()
        two_hours_ago = current_time - datetime.timedelta(hours=2)
        subjects_within_the_last_two_hours = session.query(Sighting).filter(Sighting.time > two_hours_ago).all()
        subjects_within_the_last_two_hours_json = sightings_schema.dump(subjects_within_the_last_two_hours)

        return jsonify(subjects_within_the_last_two_hours_json)
    if request.method == 'POST':
        #get information
        long = request.form.get('long')
        lat = request.form.get('lat')
        description = request.form.get('description')
        sighting_type = request.form.get('sighting_type')
        #image = request.form.files.get('imagefile', '')
        if len(description) > 20:
            flash("Description must be greater than 20 characters.", category ="error")
        else:
            flash("Sighting created.", category="success")
            new_sighting = Sighting(long=long, lat=lat, description=description, sighting_type=sighting_type)
            db.session.add(new_sighting)
            db.session.commit()
            return redirect(url_for('views.home'))
    return render_template("/") #insert website