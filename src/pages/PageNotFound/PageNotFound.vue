<template>
  <div class="notfound">
    <n-result status="404" title="404 页面去哪儿了？" description="生活总归带点荒谬">
      <template #footer>
        <n-button type="primary" style="font-weight: 700" @click="backToHome"
          >老老实实回家</n-button
        >
      </template>
    </n-result>
  </div>
</template>

<script lang="ts" setup>
import { NResult, NButton } from 'naive-ui'
import { useRouter } from 'vue-router'
const router = useRouter()

function backToHome() {
  router.push('/home')
}
</script>

<style lang="scss" scoped>
.notfound {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
