from . import db, ma
from sqlalchemy.sql import func
#from sqlalchemy_imageattach.entity import Image, image_attachment

class Sighting(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    long = db.Column(db.String(16))
    lat = db.Column(db.String(16))
    description = db.Column(db.String(1000))
    sighting_type = db.Column(db.String(150))
    #picture = image_attachment('SightingImage')
    date = db.Column(db.DateTime(timezone=True), default=func.now())

class SightingSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","long", "lat", "description", "sighting_type", "date")

sightings_schema = SightingSchema(many=True)