/* eslint-disable no-async-promise-executor */
import request from './base'

/**
 * @name 测试
 * @returns
 */
export async function test(): Promise<null> {
  return new Promise<null>(async (resolve) => {
    const res = await request.get<null>({
      url: '/',
      headers: {
        token: '12312321',
      },
    })

    resolve(res)
  })
}
