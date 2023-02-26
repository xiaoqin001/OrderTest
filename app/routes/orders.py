from flask import Blueprint
from app import app

bp = Blueprint("orders", __name__, url_prefix="")


@bp.route("/")
def index():
    return "Order Up!"
