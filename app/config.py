import os

class Configuration:
    SECRETE_KEY = os.environ.get("SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_URI = os.environ.get("DATABASE_URL")
