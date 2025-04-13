import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://root:3814@localhost/sme_manager'
    SQLALCHEMY_TRACK_MODIFICATIONS = False  
    SECRET_KEY = os.urandom(24)  
