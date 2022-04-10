<template>
  <div class="search">
    <div class="box">
      <n-input-group>
        <n-input placeholder="搜索文章标题" clearable round>
          <template #prefix>
            <n-icon>
              <search />
            </n-icon>
          </template>
        </n-input>
        <n-button type="primary" round>搜索</n-button>
      </n-input-group>
    </div>
    <div class="host">
      <span>{{ `欢迎来到 ${'Dokom'} 的个人空间 🏳‍🌈` }}</span>
    </div>
    <div class="avatar">
      <n-avatar
        round
        src="https://img2.baidu.com/it/u=3810088904,2972189392&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=6682"
      />
      <span>{{ '资料设置 ✏' }}</span>
      <n-badge dot>
        <span style="color: #000">{{ '消息 📫' }}</span>
      </n-badge>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NInput, NIcon, NAvatar, NBadge, NInputGroup, NButton } from 'naive-ui'
import { Search } from '@vicons/ionicons5'
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: space-between;
  .box {
    width: 30vw;
  }

  .host {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 700;
  }

  .avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    cursor: var(--cursor-pointer);
  }
}
</style>
