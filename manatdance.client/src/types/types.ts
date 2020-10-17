export interface DeviceConnection {
  isConnected: boolean;
  isEnabled: boolean;
  ping: boolean;
  tcp: any;
  udp: any;
}

export interface DeviceInfo {
  deviceName: string,
  deviceTime: string,
  macAddress: string,
  networkParams: NetworkParameters,
  platformName: string,
  serialNumber: string
}

export interface NetworkParameters {
  gateway: string,
  ip: string,
  mask: string
}

export interface DeviceUser {
  card: number,
  group_id: string,
  name: string,
  password: string,
  privilege: number,
  uid: number,
  user_id: string
}
