from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import Sighting

entry = Blueprint('entry', __name__)
from . import db

@entry.route('/[path to enter sighting information]', methods = ['GET', 'POST'])
def enter_sighting():
    if request.method == 'POST':
        #get information
        description = request.form.get('description')
        type = request.form.get('type')
        image = request.form.files.get('imagefile', '')
        if len(description) < 6:
            flash("Email must be greater than 4 characters.", category ="error")
        else:
            flash("Sighting created.", category="success")
            new_sighting = Sighting(description = description, type=type, image = image)
            db.session.add(new_sighting)
            db.session.commit()
            return redirect(url_for('views.home'))
    return render_template("") #insert website
