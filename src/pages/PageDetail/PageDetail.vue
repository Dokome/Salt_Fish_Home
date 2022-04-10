<template>
  <div class="detail">
    <cpn-layout-tem ref="detailWrapper">
      <template #leftBox>
        <div class="detail-main">
          <cpn-block-card title="内容详情 📖">
            <v-md-editor ref="preview" :model-value="markdown" mode="preview"></v-md-editor>
          </cpn-block-card>
        </div>
      </template>
      <template #rightBox>
        <info-block />
        <recommand-block />
        <interact-block />
        <div class="detail-catalogue">
          <cpn-block-card title="目录 🔰">
            <div class="catalogue">
              <div
                v-for="(anchor, index) in titles"
                :key="index"
                :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                @click="handleAnchorClick(anchor)"
              >
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </div>
          </cpn-block-card>
        </div>
      </template>
    </cpn-layout-tem>
  </div>
</template>

<script lang="ts" setup>
import { useGetDetail, useHeadJump } from './hooks'
import CpnLayoutTem from '@/components/CpnLayoutTem'
import CpnBlockCard from '@/components/CpnBlockCard'
import RecommandBlock from './RecommandBlock'
import InteractBlock from './InteractBlock'
import InfoBlock from './InfoBlock'
const { markdown } = useGetDetail()
const { preview, detailWrapper, titles, handleAnchorClick } = useHeadJump()
</script>

<style lang="scss" scoped>
.detail {
  .detail-main {
    min-height: 100%;
    display: flex;
  }

  .detail-catalogue {
    width: 100%;
    display: flex;
  }

  .detail-catalogue {
    user-select: none;
    .catalogue {
      padding: var(--padding-withTitle);
    }
  }
}
</style>
