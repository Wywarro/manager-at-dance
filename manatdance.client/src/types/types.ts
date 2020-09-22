export interface DeviceConnection {
  isConnected: boolean;
  isEnabled: boolean;
  ping: boolean;
  tcp: any;
  udp: any;
}
