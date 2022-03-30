<template>
  <div class="side">
    <div class="side__bgc">
      <div>IM A "SALT FISH" WITH BIG DREAM</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.side {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15rem;
  background: #fff;

  overflow: hidden;

  &__bgc {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 15rem;
    // height: 8rem;
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
    user-select: none;
    &,
    div {
      cursor: pointer;
    }
  }
}
</style>
