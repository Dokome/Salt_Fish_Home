export function useRecomendTags() {
  const options = [
    {
      label: '推荐标签',
      value: '',
      disabled: true,
    },
    {
      label: '学习',
      value: 0,
    },
    {
      label: '生活',
      value: 1,
    },
    {
      label: '吐槽',
      value: 2,
    },
    {
      label: '树洞',
      value: 3,
    },
  ]

  return { options }
}
