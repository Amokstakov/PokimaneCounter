from flask import Flask
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'blah' 
socket_ = SocketIO(app)
socket_.init_app(app, cors_allowed_origins="*")


@socket_.on('message')
def handle_message(message):
    print('received message: ' + message)
    print("Anything at al")
    send(message, broadcast=True)
    emit(message)

if __name__ == '__main__':
    socket_.run(app, debug=True)
