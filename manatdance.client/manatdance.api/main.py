from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from zkconnect.front_requests import Device
from zkconnect.zk_device import ZkDeviceConnector

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def testCall():
    return jsonify({'message': "Have a nice day!"})


@app.route('/connect', methods=["POST"])
@cross_origin()
def connectToDevice():
    device_request = dict(request.get_json())
    device = Device(**device_request)
    zk_device = ZkDeviceConnector()
    zk_device.change_ip(device.deviceIp)

    return jsonify({
        'message': zk_device.test_connection()
    })


@app.route('/device-info', methods=["GET"])
@cross_origin()
def getDeviceInfo():
    device_request = dict(request.get_json())
    device = Device(**device_request)
    zk_device = ZkDeviceConnector()

    return jsonify({
        'message': zk_device.get_info_about_device()
    })


@app.route('/users', methods=["GET"])
@cross_origin()
def getUsers():
    dev_connector = ZkDeviceConnector()
    return jsonify({'users': dev_connector.get_users_from_device()})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
