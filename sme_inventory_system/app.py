from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import *

app = Flask(__name__)
app.config.from_object(__name__)
db = SQLAlchemy(app)
from routes.auth_routes import auth_bp
from routes.settings_routes import settings_bp
from routes.report_routes import reports_bp

app.register_blueprint(auth_bp)
app.register_blueprint(settings_bp)
app.register_blueprint(reports_bp)

if __name__ == '__main__':
    app.run(debug=True)
