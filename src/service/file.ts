/* eslint-disable no-async-promise-executor */
import request from './base'
import { ImageUploadResponse } from './fileType'

/**
 * @name 上传图片
 * @param formData 文件
 * @returns
 */
export async function uploadImage(formData: FormData): Promise<string> {
  // 上传图片
  return new Promise<string>(async (resolve) => {
    const { success, content, message } = await request.post<ImageUploadResponse>({
      url: '/file/upload/image',
      data: formData,
      // 需要带上特定的头部
      headers: {
        'Content-Type': 'application/form-data',
      },
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(content)
  })
}
