import time
from datetime import date, datetime, timedelta
from flask import Flask
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'blah' 
socket_ = SocketIO(app)
socket_.init_app(app, cors_allowed_origins="*")


@socket_.on('message')
def handle_message(message):
    time_release = datetime(2020,11,17,8,8,10).replace(microsecond=0)
    time_now = datetime.now().replace(microsecond=0)
    time_delta = time_now - time_release
    send(str(time_delta), broadcast=True)

if __name__ == '__main__':
    port = 8080
    socket_.run(app, debug=True, port=port)
