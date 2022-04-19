export function useOptions() {
  const options = [
    {
      label: '选择你的性别',
      value: -1,
      disabled: true,
    },
    {
      label: '男 🙋‍♂️',
      value: 1,
    },
    { label: '女 🙋‍♀️', value: 0 },
  ]
  return {
    options,
  }
}
