from sme_inventory_system import db

class Notification(db.Model):
    __tablename__ = 'notifications'

    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user_profiles.id'), nullable=False)

    def __repr__(self):
        return f"<Notification {self.message}>"
