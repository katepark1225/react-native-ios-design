import DeviceInfo from 'react-native-device-info'


export const isDynamicIsland = () => {
  return DeviceInfo.hasDynamicIsland()
}
