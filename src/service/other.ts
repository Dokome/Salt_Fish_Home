/* eslint-disable no-async-promise-executor */
import request from './base'
import { TodayVisitResponse } from './otherType'

/**
 * @name 获取今日浏览量
 * @returns
 */
export async function getTodayVisit(): Promise<number> {
  return new Promise<number>(async (resolve) => {
    const { content } = await request.get<TodayVisitResponse>({
      url: '/index/todayVisit',
    })

    resolve(content)
  })
}
