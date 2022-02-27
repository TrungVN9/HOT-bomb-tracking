from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from os import path

db = SQLAlchemy()
ma = Marshmallow()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__) #how you initailize flask
    app.config['SECRET_KEY'] = 'hot' #store cookies
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    ma.init_app(app)
    from .views import views

    app.register_blueprint(views, url_prefix='/')

    from .models import Sighting
    create_database(app)
    return app

def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Created Database!')
