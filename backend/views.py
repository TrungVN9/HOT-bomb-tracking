from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import Sighting
from . import db

views = Blueprint('views', __name__)

@views.route('/', methods=['GET','POST'])
def enter_sighting():
    if request.method == 'GET':

    if request.method == 'POST':
        #get information
        long = request.form.get('long')
        lat = request.form.get('lat')
        description = request.form.get('description')
        sighting_type = request.form.get('sighting_type')
        image = request.form.files.get('imagefile', '')
        if len(description) > 20:
            flash("Description must be greater than 20 characters.", category ="error")
        else:
            flash("Sighting created.", category="success")
            new_sighting = Sighting(long=long, lat=lat, description=description, sighting_type=sighting_type, image = image)
            db.session.add(new_sighting)
            db.session.commit()
            return redirect(url_for('views.home'))
    return render_template("/") #insert website