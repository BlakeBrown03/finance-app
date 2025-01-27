import firebase
import json

with open("../key.json") as f:
    data = json.load(f)

firebase_config = data["firebaseConfig"]
print(firebase_config)