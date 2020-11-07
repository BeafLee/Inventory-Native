import AsyncStorage from '@react-native-community/async-storage'

const AsyncStorageService = {
  storeString: async(key, data) => {
    try {
      await AsyncStorage.setItem(key, data)
    } catch (error) {
      alert(error)
    }
  },
  storeObject: async(key, data) => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
      alert(error)
    }
  },
  getString: async(key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      } else {
        return null
      }
    } catch(e) {
      alert(e)
    }
  },
  getObject: async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      alert(e)
    }
  },
}

export default AsyncStorageService;