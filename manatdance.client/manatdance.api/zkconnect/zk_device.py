from zk import ZK, const
from .singleton import Singleton


class ZkDeviceConnector(metaclass=Singleton):

    def __init__(self, ip):
        self.changeIp(ip)

    def changeIp(self, ip):
        """Change IP of device"""
        self.ip = ip

    def create_connection(self):
        """Direct connection to device"""
        return ZK(self.ip, port=4370, timeout=5, force_udp=True)

    def get_users_from_device(self):
        """Get Users registered on device"""
        conn = None
        zk = self.create_connection()

        try:
            conn = zk.connect()
            users = conn.get_users()

            user_dict = [user.__dict__ for user in users]

            return user_dict

        except Exception as e:
            print(e)
