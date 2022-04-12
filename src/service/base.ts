import axios from 'axios'
import storage from '@/utils/storage'
import type { AxiosInstance } from 'axios'
import type { RequestConfig, RequestInterceptors } from './type'

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors

    // request 和 response 的拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例的公共拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        const { status } = err.response
        const { token } = err.response.config.headers

        if (status === 401) {
          const message = token && token.length ? '登陆状态已过期，请重新登录' : '请先完成登录'
          storage.clear()
          ;(window as any).$message.warning(message)
          setTimeout(() => {
            location.href = '/login'
          }, 3000)

          return {
            success: false,
            message,
            code: status,
          }
        }
        return err
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default new Request({
  baseURL: 'http://112.74.108.218:8080/',
  timeout: 15000,
})
