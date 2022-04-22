<template>
  <ul class="comment-list">
    <cpn-block-card title="评论 💭" :can-hover="true">
      <div class="comment-area">
        <n-input
          :value="content"
          placeholder="输入评论的内容"
          type="textarea"
          :autosize="{ maxRows: 6, minRows: 1 }"
          :maxlength="500"
          show-count
          clearable
          @update-value="changeCommentValue"
        ></n-input>
        <!--  -->
        <n-button
          secondary
          type="success"
          :loading="loading"
          :disabled="loading"
          style="width: 5rem; align-self: flex-end"
          @click="commentHandle"
          >评论</n-button
        >
      </div>
    </cpn-block-card>
    <div v-for="comment in props.currentList" :key="comment.id" class="comment-item">
      <cpn-block-card style="padding: 1rem" class="comment-item" :can-hover="true">
        <div class="comment-item-header">
          <n-avatar
            :size="50"
            object-fit="cover"
            :src="
              comment.commentUserInfo.imgUrl
                ? `http://112.74.108.218:8080/${comment.commentUserInfo.imgUrl}`
                : defaultAvatar
            "
          ></n-avatar>
          <div class="header-info" @click="backToHome(comment.commentUserInfo.userId)">
            <span class="username">{{ comment.commentUserInfo.nick || '佚名' }}</span>
            <span class="floor">{{ `${comment.gmtCreate}` }}</span>
          </div>
        </div>
        <div class="comment-item-main">
          {{ comment.content || '...' }}
        </div>
        <div class="comment-item-footer">
          <n-button type="warning" quaternary @click="changeReplyHandle(comment)">{{
            `💬 ${comment.commentCount || 0} `
          }}</n-button>
          <n-button type="error" quaternary>{{ `😍 ${comment.likeCount}` }}</n-button>
          <!-- <span>{{ `🕕 ${comment.gmtCreate}` }}</span> -->
        </div>
        <!--  -->
        <div
          v-if="(comment as any)._isOpen"
          class="comment-reply-list"
          @click.capture="changeCurrentTarget(comment)"
        >
          <ul class="reply-list-main">
            <!-- 回复列表 -->
            <li
              v-for="reply in replyList.get(comment.id)?.get(comment.currentPage)"
              :key="reply.id"
              class="main-item"
              @click="replyOpenHandle(reply.id, comment.id, reply.commentUserInfo)"
            >
              <n-avatar
                :size="30"
                object-fit="cover"
                :src="
                  reply.commentUserInfo.imgUrl
                    ? `http://112.74.108.218:8080/${reply.commentUserInfo.imgUrl}`
                    : defaultAvatar
                "
              ></n-avatar>
              <span class="username" @click="backToHome(reply.commentUserInfo.userId)">{{
                `${reply.commentUserInfo.nick || '佚名'}${
                  reply.parentId === -1 ? '' : ` 回复 ${reply.commentedUserInfo.nick}`
                } : `
              }}</span>
              <span class="content">{{ reply.content || '...' }}</span>
            </li>
            <n-pagination
              v-if="!replyLoading && Math.ceil(comment.commentCount / 5) > 1"
              style="padding-left: 0.5rem; margin-top: 0.5rem"
              :page="comment.currentPage"
              :page-count="Math.ceil(comment.commentCount / 5)"
              :on-update:page="pageChangeHandle"
            ></n-pagination>
            <li
              v-if="replyLoading && !replyList.get(comment.id)?.get(comment.currentPage)?.length"
              class="main-item"
            >
              评论加载中 ...
            </li>
            <li
              v-if="!replyLoading && !replyList.get(comment.id)?.get(comment.currentPage)?.length"
              class="main-item"
            >
              暂无回复，快来发表你的看法吧~ 😁
            </li>
          </ul>
          <n-button
            type="default"
            style="width: 8rem; align-self: flex-end"
            @click="replyOpenHandle(-1, comment.id, comment.commentUserInfo)"
            >我有话说 😃</n-button
          >
        </div>
      </cpn-block-card>
    </div>
    <!-- 模态框 -->
    <n-modal v-model:show="modalShow" @after-leave="replyCloseHandle">
      <div class="reply-modal">
        <cpn-block-card title="回复">
          <div class="modal-main">
            <n-input
              :placeholder="replyPlaceHolder"
              type="textarea"
              :autosize="{ maxRows: 6, minRows: 6 }"
              :maxlength="500"
              show-count
              :value="replyContent"
              @update-value="changeReplyValue"
            ></n-input>
            <n-button type="primary" style="width: 8rem; align-self: flex-end" @click="replyHandle"
              >发表回复</n-button
            >
          </div>
        </cpn-block-card>
      </div>
    </n-modal>
    <!-- 加载更多 -->
    <cpn-load-more
      v-if="currentList.length"
      :current-page="currentPage"
      :total-page="totalPage"
      @change-current-page="changeCurrentPage"
    ></cpn-load-more>
  </ul>
</template>

<script lang="ts" setup>
import type { CommentResponseContentMsg } from '@/service/articleType'
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnLoadMore from '@/components/CpnLoadMore'
import defaultAvatar from '@/assets/image/default-avatar.png'
import { useCommentReply } from './hooks'
import { NAvatar, NButton, NInput, NModal, NPagination } from 'naive-ui'

const props = defineProps<{
  currentPage: number
  totalPage: number
  currentList: CommentResponseContentMsg[]
  articleId: string
}>()

const emits = defineEmits(['onCommentUpdate', 'changeCurrentPage'])
const {
  loading,
  content,
  modalShow,
  replyContent,
  replyPlaceHolder,
  replyList,
  replyLoading,
  replyHandle,
  commentHandle,
  changeCommentValue,
  changeCurrentPage,
  changeReplyHandle,
  replyOpenHandle,
  replyCloseHandle,
  changeReplyValue,
  pageChangeHandle,
  changeCurrentTarget,
} = useCommentReply(parseInt(props.articleId), emits)

function backToHome(userId: number | string) {
  location.href = `/center/${userId}`
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
    gap: 1rem;
    .comment-item-header {
      display: flex;
      gap: 1rem;
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
      // margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: $background-gray;

      .reply-list-main {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .main-item {
          display: flex;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 0.5rem;
          transition: 0.4s;
          padding: 0.5rem;

          // .username {
          // font-weight: 700;
          // }

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

.reply-modal {
  display: flex;
  width: 40rem;
  .modal-main {
    padding: var(--padding-withTitle);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
