<template>
  <div :class="tabState" style="transition: 0.4s">
    <div :class="`${tabState}-bgc`">
      <div>IM A "SALT FISH" WITH BIG DREAM</div>
    </div>
    <n-list class="side-list">
      <template #header>
        <span :class="`${tabState}-list-header`">菜单</span>
      </template>
      <n-list-item
        v-for="item in menulist"
        :key="item.id"
        :class="item.id === currentNavTab ? 'current' : ''"
        @click="changeCurrent(item.id, item.target)"
      >
        <n-icon size="20">
          <component :is="item.comp" />
        </n-icon>
        <div class="list-item-title">{{ item.title }}</div>
      </n-list-item>
    </n-list>
    <div :class="`${tabState}-change`" @click="changeSideMode">
      <n-icon size="30">
        <component :is="tabState === 'side' ? ArrowBackCircleOutline : ArrowForwardCircleOutline" />
      </n-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NIcon, NList, NListItem } from 'naive-ui'
import { ArrowForwardCircleOutline, ArrowBackCircleOutline } from '@vicons/ionicons5'
import useNavList from './hooks/useNavList'
// 获取菜单列表
const menulist = useNavList()
const currentNavTab = ref(0)
const router = useRouter()
const tabState = ref('side')

function changeCurrent(clickIndex: number, target: string) {
  currentNavTab.value = clickIndex
  router.push(target)
}

function changeSideMode() {
  tabState.value = tabState.value === 'side' ? 'side-shrink' : 'side'
}

router.beforeEach((to) => {
  const target = menulist.find((menu) => {
    return to.path.startsWith(menu.target)
  })
  currentNavTab.value = target ? target.id : 0
})
</script>

<style lang="scss" scoped>
.side {
  position: sticky;
  top: 0;
  bottom: 0;
  width: 15rem;
  background: #fff;
  overflow: hidden;
  padding: 0 1rem;

  &-bgc {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 13rem;
    padding: 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    user-select: none;
    &,
    div {
      cursor: var(--cursor-pointer);
    }
  }

  &-list {
    &-header {
      font-weight: 500;
    }

    > :nth-child(n) {
      border: none !important;
      cursor: var(--cursor-pointer);
      color: $text-gray;
      transition: 0.4s;
    }
  }

  .list-item-title {
    margin-left: 0.5rem;
  }
}

.side-shrink {
  position: sticky;
  top: 0;
  bottom: 0;
  width: 5.5rem;
  background: #fff;
  overflow: hidden;
  padding: 0 1rem;

  &-bgc {
    display: none;
  }

  &-list {
    &-header {
      display: none;
    }

    > :nth-child(n) {
      border: none !important;
      cursor: var(--cursor-pointer);
      color: $text-gray;
      transition: 0.4s;
    }
  }

  .list-item-title {
    display: none;
  }
}

.current {
  color: $text-white !important;
  font-weight: 700;
  border-radius: 0.5rem;
  background: $background-yellow;
  padding-left: 1rem;
}

.side-change,
.side-shrink-change {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: $text-yellow;
  text-align: center;
  cursor: var(--cursor-pointer);
}
</style>
