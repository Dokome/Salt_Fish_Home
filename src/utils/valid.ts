/**
 *
 * @param email 邮箱
 * @returns 验证结果
 */
export function emailValidhandle(email: any): boolean {
  if (typeof email !== 'string') {
    return false
  }
  const regExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

  return regExp.test(email)
}

/**
 *
 * @param code 验证码
 * @returns 验证结果
 */
export function emailCodeValidhandle(code: any): boolean {
  if (typeof code !== 'string') {
    return false
  }
  const regExp = /^\d{6}$/

  return regExp.test(code)
}
