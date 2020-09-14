import flaskApi from "./flask_api";

const testFlask = () => flaskApi.get("/");
const connectToDevice = (deviceIp: string) => flaskApi.post("/connect", { deviceIp });
const getDeviceInfo = () => flaskApi.get("/device-info");
const getDeviceUsers = () => flaskApi.get("/users");

export { testFlask, connectToDevice, getDeviceInfo, getDeviceUsers };
