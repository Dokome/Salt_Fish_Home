<template>
  <ul class="comment-list">
    <cpn-block-card title="评论 💭"> </cpn-block-card>
    <n-input-group>
      <n-input placeholder="输入评论的内容"></n-input>
      <n-button type="success">评论</n-button>
    </n-input-group>
    <div v-for="(item, index) in 3" :key="item" class="comment-item">
      <cpn-block-card style="padding: 1rem" class="comment-item">
        <div class="comment-item-header">
          <n-avatar
            :size="50"
            object-fit="cover"
            src="https://img2.baidu.com/it/u=3810088904,2972189392&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=6682"
          ></n-avatar>
          <div class="header-info">
            <span class="username">{{ 'Dokom' }}</span>
            <span class="floor">{{ `${index + 1} 楼` }}</span>
          </div>
        </div>
        <div class="comment-item-main">
          {{
            '这种事情我见的多了，我只想说懂得都懂，不懂的我也不多说了，细细品吧，你也别来问我怎么回事，这里面利益牵扯太大了，说了对你我都没有好处，你就当不知道就行了，其余的我只能说这里水很深，牵扯到很多东西，详细情况你们很难找到的，网上大部分都删干净了，所以我说懂得都懂。懂的人都已经获利上岸了，不懂的人则永远不懂。关键懂的人都是自己悟的，你也不知道谁是懂的人，不知道向谁请教。大家都藏着掖着，生怕别人知道自己懂。懂了就能收割不懂的，你甚至都不知道自己不懂。只是在有些时候，某些人对某些事情，不懂装懂，还以为别人不懂，其实自己才是最不懂的。别人懂的够多了，不仅懂，还懂的超出范围。但是某些不懂的人，让这个懂的人完全教不懂。所以不懂的人永远不懂，只能不懂装懂，所以说懂得都懂，你懂了吗?'
          }}
        </div>
        <div class="comment-item-footer">
          <n-button type="warning">{{ `💬 回复 ${'3'}` }}</n-button>
          <n-button type="error">{{ `😍 ${'123'}` }}</n-button>
          <span>{{ `🕕 ${'2022 04 09'}` }}</span>
        </div>
        <div class="comment-reply-list">
          <n-input-group>
            <n-input placeholder="输入回复的内容"></n-input>
            <n-button type="warning">回复</n-button>
          </n-input-group>
          <ul class="reply-list-main">
            <li v-for="ritem in 3" :key="ritem" class="main-item">
              <n-avatar
                :size="30"
                object-fit="cover"
                src="https://img2.baidu.com/it/u=3810088904,2972189392&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=6682"
              ></n-avatar>
              <span class="username">{{ `Dokom : ` }}</span>
              <span class="content">{{ '啊对对对' }}</span>
            </li>
          </ul>
        </div>
      </cpn-block-card>
    </div>
    <cpn-load-more></cpn-load-more>
  </ul>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnLoadMore from '@/components/CpnLoadMore'
import { NAvatar, NButton, NInput, NInputGroup } from 'naive-ui'
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .comment-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .comment-item-header {
      display: flex;
      gap: 0.5rem;
      .header-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .username {
          font-weight: 700;
        }
        .floor {
          color: $text-gray;
        }
      }
    }

    .comment-item-footer {
      display: flex;
      gap: 1rem;
      color: $text-gray;
      flex-direction: row-reverse;
      align-items: center;
    }

    .comment-reply-list {
      margin-top: 0.5rem;
      padding: 1rem;
      background-color: $background-gray;

      .reply-list-main {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;

        .main-item {
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 0.5rem;
          transition: 0.4s;
          padding: 0.5rem;

          &:hover {
            background-color: $background-white;
            border-radius: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
