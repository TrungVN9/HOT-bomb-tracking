from . import db
from sqlalchemy.sql import func

class Sighting(db.Model):
    #define schema
    id = db.Column(db.Integer, primary_key=True)
    long = db.Column(db.String(16))
    lat = db.Column(db.String(16))
    description = db.Column(db.String(1000))
    sighting_type = db.Column(db.String(150))
    date = db.Column(db.DateTime(timezone=True), default=func.now())