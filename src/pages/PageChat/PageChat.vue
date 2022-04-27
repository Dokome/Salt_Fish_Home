<template>
  <div class="chat">
    <div class="chat-box">
      <div class="chat-box-main">
        <div class="main-title">咸言咸语</div>
        <ul class="main-list">
          <li v-for="item in 10" :key="item" class="main-item" :class="item & 1 ? ' self' : ''">
            <n-avatar
              class="main-avatar"
              :size="36"
              round
              object-fit="cover"
              :src="
                /*user.imgUrl*/ 123
                  ? `http://112.74.108.218:8080/${/*user.imgUrl*/ 123}`
                  : defaultAvatar
              "
              fallback-src="/src/assets/image/bgc1.jpg"
            />
            <div class="main-item-content">
              1231231231231231231231231231231231231231231231231231231231233123123123123123123123123123123123123123123312312312312312312312312312312312312312312331231231231231231231231233
            </div>
          </li>
        </ul>
        <div class="main-input">
          <n-input
            placeholder="在此输入内容"
            type="textarea"
            :autosize="{ maxRows: 3, minRows: 1 }"
            :maxlength="500"
          ></n-input>
          <n-button>发送 🚀</n-button>
        </div>
      </div>
      <div class="chat-box-user">
        <div class="user-title">
          <base-title title="当前在线 3" />
        </div>
        <div v-for="user in 3" :key="user" class="user-item">
          <n-avatar
            round
            object-fit="cover"
            :src="
              /*user.imgUrl*/ 123
                ? `http://112.74.108.218:8080/${/*user.imgUrl*/ 123}`
                : defaultAvatar
            "
            fallback-src="/src/assets/image/bgc1.jpg"
          />
          {{ 'dokom' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseTitle from '@/base/BaseTitle'
import defaultAvatar from '@/assets/image/default-avatar.png'
import { NAvatar, NInput, NButton } from 'naive-ui'
</script>

<style lang="scss" scoped>
.chat {
  padding: 2rem;
  box-sizing: border-box;
  overflow: hidden;

  .chat-box {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    gap: 2rem;

    .chat-box-main {
      flex: 1;
      max-width: calc(100% - 22rem);
      display: flex;
      flex-direction: column;
      background-color: $background-white;

      .main-title {
        padding: 1rem;
        text-align: center;
        font-weight: 700;
        width: 100%;
        box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.1);
      }

      .main-list {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        max-width: 100%;
        padding: 2rem;
        gap: 2rem;
        flex: 1;
        max-height: 100%;
        overflow: auto;
        box-sizing: border-box;

        &::-webkit-scrollbar {
          width: 0;
        }

        .main-item {
          display: flex;
          gap: 1rem;
          min-width: 15rem;

          .main-item-content {
            max-width: calc(100% - 6.5rem);
            padding: 1rem;
            border-radius: 0.2rem;
            box-sizing: border-box;
            background-color: $background-gray;
            word-wrap: break-word;
            word-break: normal;
          }

          .main-avatar {
            flex-shrink: 0;
          }

          &.self {
            flex-direction: row-reverse;
            .main-item-content {
              background-color: $text-yellow;
              color: $text-white;
            }
          }
        }
      }

      .main-input {
        padding: 2rem;
        display: flex;
        gap: 2rem;
      }
    }

    .chat-box-user {
      width: 20rem;
      display: flex;
      flex-direction: column;
      position: relative;
      max-height: 100%;
      overflow: auto;
      background-color: $background-white;

      .user-title {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        background-color: $background-white;
        z-index: 999;
      }

      .user-item {
        padding: 1rem;
        display: flex;
        align-items: center;
        font-weight: 700;
        gap: 1rem;
        transition: 0.4s;

        &:hover {
          background-color: $background-yellow;
        }
      }
    }
  }
}
</style>
