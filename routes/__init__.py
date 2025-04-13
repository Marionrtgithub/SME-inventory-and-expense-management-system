from .auth_routes import auth_bp
from .settings_routes import settings_bp
from .report_routes import reports_bp
all_blueprints = [auth_bp, settings_bp, reports_bp]
