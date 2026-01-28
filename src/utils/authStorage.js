import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    const ac = await AsyncStorage.getItem(`${this.namespace}:token`)
    return ac
  }

  async setAccessToken(accessToken) {
    return await AsyncStorage.setItem(`${this.namespace}:token`, accessToken)
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}

export default AuthStorage
