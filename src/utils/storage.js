import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async () => {
  try {
    await AsyncStorage.setItem("select", "aceito");
    return true
  } catch (e) {
    // saving error
    return false
  }
};
export const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("select");
    if (value !== null) {
      return value
    }
  } catch (e) {
    // error reading value
    return false
  }
};
