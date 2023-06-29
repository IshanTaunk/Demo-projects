from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/contacts")
def contacts():
    result={
        "name":"Ishan",
        "phone":"9080975271"
    }
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)