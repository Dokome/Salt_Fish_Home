<template>
  <div class="about">
    <cpn-block-card title="常见问题">
      <div class="question">
        <n-collapse arrow-placement="right" :accordion="true" class="question-list">
          <n-collapse-item
            v-for="item in qalist"
            :key="item.name"
            :title="item.title"
            :name="item.name"
          >
            <div>{{ item.content }}</div>
          </n-collapse-item>
        </n-collapse>
      </div>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NCollapse, NCollapseItem } from 'naive-ui'
const qalist = [
  {
    name: 1,
    title: '😢 发现了 BUG 如何进行反馈 ',
    content: '可以点击 “关于我们” 板块在 github 中或是联系我们进行 BUG 的反馈',
  },
  {
    name: 2,
    title: '😁 发布文章需要注意什么 ',
    content:
      '本网站的文章发布采用 md 的语法，书写博客流畅，可先自行学习 md 相关知识点。在发现文章存在违禁信息后，将一键删除账号 😡',
  },
  {
    name: 3,
    title: '😭 发布的文章不见了',
    content: '可以继续在发布页面再次发布，我们有草稿箱的功能保存上次的文章',
  },
  {
    name: 4,
    title: '🤔 无法访问一些页面 ',
    content: '在检查网络情况无误后，部分页面需要登录状态才能进入 ~',
  },
  {
    name: 5,
    title: '🤗 其他 ',
    content: '还有其他问题欢迎在留言板留言或联系我们',
  },
]
</script>

<style lang="scss" scoped>
.about {
  padding: 2rem;
  display: flex;

  .question {
    padding: 2rem;

    .question-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      :nth-child(n) {
        border: none !important;
      }
    }
  }
}
</style>
