// HTTP工具类
import axios from 'axios'
import Config from '@/config'
axios.defaults.baseURL = Config.baseURL
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
axios.defaults.timeout = 60000
axios.defaults.withCredentials = true

export default class http {
  static async request (method, url, data, loading = true) {
    const param = {
      url: url,
      method: method,
      data: data
    }
    if (loading) {
      // Tips.loading()
    }
    const res = await axios(param)
    if (this.isSuccess(res)) {
      return res.data
    } else {
      throw this.requestException(res)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess (res) {
    const status = res.status
    // 微信请求错误
    if (status !== 200) {
      return false
    }
    const result = res.data
    return !(result && result.code !== 0)
  }

  /**
   * 异常
   */
  static requestException (res) {
    const error = {}
    error.status = res.status
    const result = res.data
    if (result) {
      error.serverCode = result.code
      error.message = result.message
      error.serverData = result
    }
    return error
  }

  static get (url, data, loading = true) {
    return this.request('GET', url, data, loading)
  }

  static put (url, data, loading = true) {
    return this.request('PUT', url, data, loading)
  }

  static post (url, data, loading = true) {
    return this.request('POST', url, data, loading)
  }

  static patch (url, data, loading = true) {
    return this.request('PATCH', url, data, loading)
  }

  static delete (url, data, loading = true) {
    return this.request('DELETE', url, data, loading)
  }
}
