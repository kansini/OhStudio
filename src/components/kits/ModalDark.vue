<template>
  <div class="ohs-modal-dark" v-if="visible">
    <div class="ohs-modal-dark--header">
      <div class="ohs-modal-dark--close" @click="close">
        <i class="ohs-font-icons">close</i>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "OhsModalDark",
  props: {
    visible: Boolean
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.ohs-modal-dark {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 504px;
  background: rgba(26, 19, 20, .96);
  backdrop-filter: blur(4px);
  box-shadow: 4px 8px 20px 0 rgba(0, 0, 0, .3);
  border-radius: 8px;
  overflow: hidden;
  z-index: 999;

  .ohs-modal-dark--header {
    position: absolute;
    width: 100%;
    height: 24px;
    left: 0;
    top: 0;

    .ohs-modal-dark--close {
      position: absolute;
      top: 4px;
      left: 8px;
      cursor: pointer;
      z-index: 999;

      .ohs-font-icons {
        font-size: 16px;
        color: rgba(255, 255, 255, .5);
        transition: all ease .4s;

        &:hover {
          color: rgba(255, 255, 255, 1);
          transform: rotate(180deg);
        }
      }
    }

  }

  .ohs-modal-dark--content {
    width: 100%;
    height: calc(100% - 24px);
  }

}
</style>
