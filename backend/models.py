from . import db
from sqlalchemy.sql import func

class Sighting(db.Model):
    #define schema
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(1000))
    type = db.Column(db.String(150))
    date = db.Column(db.DateTime(timezone=True), default=func.now())