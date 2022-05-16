from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/')
@app.route("/index", methods=['GET', 'POST'])
def index():
    message = "选择的人物为："
    if request.method == 'POST':
        person = str(request.values.get("person"))
        return {'person': person}
    return render_template("index.html", temp=message)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
