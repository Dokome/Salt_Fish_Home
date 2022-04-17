<template>
  <ul class="comment-list">
    <cpn-block-card title="评论 💭" :can-hover="true">
      <div class="comment-area">
        <n-input
          placeholder="输入评论的内容"
          type="textarea"
          :autosize="{ maxRows: 6, minRows: 1 }"
          :maxlength="500"
          show-count
        ></n-input>
        <n-button type="success" style="width: 5rem; align-self: flex-end">评论</n-button>
      </div>
    </cpn-block-card>
    <div
      v-for="(comment, index) in props.currentList"
      :key="comment.commenterId"
      class="comment-item"
    >
      <cpn-block-card style="padding: 1rem" class="comment-item" :can-hover="true">
        <div class="comment-item-header">
          <n-avatar
            :size="50"
            object-fit="cover"
            :src="comment.userinfo.imgUrl || defaultAvatar"
          ></n-avatar>
          <div class="header-info">
            <span class="username">{{ comment.userinfo.nick || '佚名' }}</span>
            <span class="floor">{{ `${index + 1} 楼` }}</span>
          </div>
        </div>
        <div class="comment-item-main">
          {{ comment.content || '...' }}
        </div>
        <div class="comment-item-footer">
          <n-button type="warning" @click="changeReplyHandle">{{ `💬 回复 ` }}</n-button>
          <n-button type="error">{{ `😍 ${comment.likeCount}` }}</n-button>
          <span>{{ `🕕 ${comment.gmtCreate}` }}</span>
        </div>
        <!--  -->
        <div class="comment-reply-list">
          <div class="reply-area">
            <n-input
              placeholder="输入回复的内容"
              type="textarea"
              :autosize="{ maxRows: 6, minRows: 1 }"
              :maxlength="500"
              show-count
            ></n-input>
            <n-button type="warning" style="width: 5rem">回复</n-button>
          </div>
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
    <cpn-load-more :current-page="currentPage" :total-page="totalPage"></cpn-load-more>
  </ul>
</template>

<script lang="ts" setup>
import type { CommentResponseContentMsg } from '@/service/articleType'
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnLoadMore from '@/components/CpnLoadMore'
import { NAvatar, NButton, NInput } from 'naive-ui'
import defaultAvatar from '@/assets/image/default-avatar.png'

const props = defineProps<{
  currentPage: number
  totalPage: number
  currentList: CommentResponseContentMsg[]
}>()

function changeReplyHandle() {
  console.log(123)
}
</script>

<style lang="scss" scoped>
.comment-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .comment-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: var(--padding-withTitle);
  }

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

  .reply-area {
    display: flex;
    gap: 1rem;
  }
}
</style>
