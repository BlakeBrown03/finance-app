import firebase
import json
from fmp_python.fmp import FMP

with open("../key.json") as f:
    data = json.load(f)

fmp = data["stocks_key"]
firebase_config = data["firebaseConfig"]

firebase = firebase.App()