<template>
  <div class="outWrapper">
    <div class="leftBox">
      <slot name="leftBox"></slot>
    </div>
    <div class="rightBox">
      <slot name="rightBox"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.outWrapper {
  display: flex;
  overflow: auto;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;

  .leftBox {
    flex: 1 0;
    border-radius: 0.5rem;
  }
  .rightBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 20rem;
  }
}
</style>
