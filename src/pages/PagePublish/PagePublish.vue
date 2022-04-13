<template>
  <div class="publish">
    <!-- 顶部标签栏 -->
    <div class="publish-group">
      <n-input-group>
        <n-input-group-label style="width: 5rem; text-align: center">标题</n-input-group-label>
        <n-input
          placeholder="在此输入文章标题"
          style="width: 30rem"
          :maxlength="15"
          show-count
          clearable
          :on-update:value="titleValueChangeHandle"
          :value="title"
        />
      </n-input-group>
      <n-button type="info" @click="saveArticleToStorage">保存草稿</n-button>
      <n-button type="primary" @click="changeModalState">发布文章</n-button>
    </div>
    <!-- 发布模态框 -->
    <n-modal v-model:show="showModal">
      <div class="modal">
        <cpn-block-card title="发布文章">
          <div class="modal-main">
            <n-input-group>
              <n-input-group-label style="width: 5rem; text-align: center"
                >标题</n-input-group-label
              >
              <n-input
                placeholder="在此输入文章标题"
                :maxlength="15"
                show-count
                clearable
                :on-update:value="titleValueChangeHandle"
                :value="title"
              />
            </n-input-group>
            <n-input-group>
              <n-input-group-label style="width: 5rem; text-align: center"
                >标签</n-input-group-label
              >
              <n-select
                :options="options"
                placeholder="选择标签"
                tag
                filterable
                :value="tag"
                :on-update:value="tagValueChangeHandle"
              ></n-select>
            </n-input-group>
            <n-tag type="primary">上传封面 （推荐使用 1:1 的图片 🤗）</n-tag>
            <n-upload list-type="image-card" :max="1" :custom-request="coverImgRequestHandle" />
            <n-button type="primary" @click="articlePublishHandle">确认发布</n-button>
          </div>
        </cpn-block-card>
      </div>
    </n-modal>
    <!-- md 编辑器 -->
    <v-md-editor
      v-model="text"
      height="80vh"
      :disabled-menus="[]"
      @upload-image="articleUploadImage"
      @save="saveArticleToStorage"
    ></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import {
  NButton,
  NSelect,
  NInputGroup,
  NInputGroupLabel,
  NInput,
  NModal,
  NUpload,
  NTag,
} from 'naive-ui'
import { useRecomendTags, useArticleInfo } from './hooks'
import CpnBlockCard from '@/components/CpnBlockCard'

const { options } = useRecomendTags()
const {
  text,
  title,
  tag,
  showModal,
  coverImgRequestHandle,
  articleUploadImage,
  saveArticleToStorage,
  titleValueChangeHandle,
  tagValueChangeHandle,
  articlePublishHandle,
  changeModalState,
} = useArticleInfo()
</script>

<style lang="scss" scoped>
.publish {
  padding: 2rem;

  .publish-group {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2rem;
    gap: 1rem;
  }
}

.modal {
  width: 30rem;
  display: flex;
  .modal-main {
    padding: var(--padding-withTitle);
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
}
</style>
