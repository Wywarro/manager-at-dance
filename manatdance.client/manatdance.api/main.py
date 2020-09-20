from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_api import status, FlaskAPI

from zkconnect.front_requests import Device
from zkconnect.zk_device import ZkDeviceConnector

app = FlaskAPI(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def testCall():
    return jsonify({'message': "Have a nice day!"})


@app.route('/connect', methods=["POST"])
@cross_origin()
def connectToDevice():
    device_request = dict(request.data)
    device = Device(**device_request)
    zk_device = ZkDeviceConnector()
    zk_device.change_ip(device.deviceIp)

    try:
        return zk_device.test_connection()
    except Exception as e:
        return str(e), status.HTTP_500_INTERNAL_SERVER_ERROR


@app.route('/device-info', methods=["GET"])
@cross_origin()
def getDeviceInfo():
    device_request = dict(request.data)
    device = Device(**device_request)
    zk_device = ZkDeviceConnector()

    return jsonify(zk_device.get_info_about_device())


@app.route('/users', methods=["GET"])
@cross_origin()
def getUsers():
    dev_connector = ZkDeviceConnector()
    return jsonify(dev_connector.get_users_from_device())


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, debug=True)
