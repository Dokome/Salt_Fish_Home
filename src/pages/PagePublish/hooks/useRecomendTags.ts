export function useRecomendTags() {
  const options = [
    {
      label: '推荐标签',
      value: '',
      disabled: true,
    },
    {
      label: '学习',
      value: '学习',
    },
    {
      label: '生活',
      value: '生活',
    },
    {
      label: '吐槽',
      value: '吐槽',
    },
    {
      label: '树洞',
      value: '树洞',
    },
  ]

  return { options }
}
