interface StorageDataType {
  key: string
  value: any
  expire: number
}

function getCurrentTimeStamp() {
  return +new Date()
}

class MyStorage {
  storage: Storage
  constructor() {
    this.storage = localStorage
  }

  set(key: string, value: any, time = 3600 * 1000 * 24) {
    const expire = getCurrentTimeStamp() + time
    try {
      const data = JSON.stringify({
        key,
        value,
        expire,
      })
      this.storage.setItem(key, data)
    } catch (error) {
      //
    }
  }

  get(key: string) {
    let data = this.storage.getItem(key) || ''
    try {
      data = JSON.parse(data)
      const { value, expire } = data as unknown as StorageDataType
      if (expire <= getCurrentTimeStamp()) {
        return null
      }
      return value
    } catch (error) {
      //
    }
  }

  delete(key: string) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export default new MyStorage()
