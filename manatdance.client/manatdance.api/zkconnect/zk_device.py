from zk import ZK, const
from zk.base import ZK_helper
from .singleton import Singleton


class ZkDeviceConnector(metaclass=Singleton):

    ip = ""

    def change_ip(self, ip):
        """Change IP of device"""
        self.ip = ip
        self.zk = ZK(self.ip, port=4370, timeout=5, force_udp=True)

    def connect(self) -> ZK:
        if not self.zk.is_connect:
            try:
                self.zk.connect()
            except:
                raise Exception("Connection failed")

        return self.zk

    def test_connection(self) -> dict:
        test = ZK_helper(self.ip)
        try:
            self.connect()
        finally:
            connection_tests = {
                'ping': test.test_ping(),
                'tcp': test.test_tcp(),
                'udp': test.test_udp(),
                'isConnected': self.zk.is_connect,
                'isEnabled': self.zk.is_enabled,
            }
           
        return connection_tests

    def get_info_about_device(self) -> dict:
        test = ZK_helper(self.ip)
        zk = self.connect()
        device_info = {
            "deviceName": zk.get_device_name(),
            "macAddress": zk.get_mac(),
            "networkParams": zk.get_network_params(),
            "deviceTime": zk.get_time(),
            "platformName": zk.get_platform(),
            "serialNumber": zk.get_serialnumber(),
        }
        print(device_info)
        return device_info

    def get_users_from_device(self) -> list:
        """Get Users registered on device"""
        try:
            zk = self.connect()
            users = zk.get_users()

            user_dict = [user.__dict__ for user in users]

            return user_dict

        except Exception as e:
            print(e)
