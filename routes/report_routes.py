from flask import Blueprint, render_template

reports_bp = Blueprint('reports', __name__)

@reports_bp.route('/reports')
def reports():
    return render_template('reports.html')

@reports_bp.route('/generate_report')
def generate_report():
    return "Report generated!"
