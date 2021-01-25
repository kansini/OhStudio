<template>
  <div class="ohs-welcome" v-if="visible">
    <div class="ohs-logo" :class="{'ohs-logo-center':logoIsCenter}"></div>
    <div class="ohs-btn-group">
      <div class="ohs-btn-add" @click="handleToNew">
        <i class="ohs-font-icons">note_add</i>
        新建页面
      </div>
      <div class="ohs-btn-choose" @click="handleToOpen">
        <i class="ohs-font-icons">insert_drive_file</i>打开页面
      </div>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'OhsWelcome',
  props: {
    visible: Boolean,
    logoIsCenter: Boolean,
  },
  methods: {
    handleToNew() {
      this.$emit('new')
    },
    handleToOpen() {
      this.$emit('open')
    }
  }
})

</script>

<style lang="scss" scoped>
.ohs-welcome {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/img/samples/main_bg_default.jpg") no-repeat top;
  background-size: 100% auto;
  animation: moveBg 40s alternate infinite;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(60px);
    animation: blurBg 4s linear infinite;
    z-index: 1;
  }

  @keyframes blurBg {
    0%, 100% {
      backdrop-filter: blur(20px) brightness(1);
    }
    50% {
      backdrop-filter: blur(60px) brightness(1.5);
    }
  }
  @keyframes moveBg {
    0%, 100% {
      background-position: 0 0;
    }
    50% {
      background-position: 0 -400px;
    }
  }


  .ohs-logo {
    position: absolute;
    right: 24px;
    top: 24px;
    width: 240px;
    height: 42px;
    background: url("../assets/img/logo-pstudio.svg") no-repeat center;
    background-size: 100% 100%;
    // transition: all ease-in .2s;
    z-index: 2;
  }

  .ohs-logo-center {
    right: 50%;
    top: 46%;
    transform: translate(50%, -50%) scale(1.6);
  }

  .ohs-btn-group {
    display: flex;
    justify-content: center;
    z-index: 2;

    [class^='ohs-btn'] {
      margin-top: 104px;
      height: 40px;
      display: flex;
      align-items: center;
      background: $ohs-blue;
      color: #fff;
      padding: 0 16px;
      border-radius: 4px;
      font-size: 14px;
      transition: all ease-in .2s;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 24px;
      }

      &:hover {
        color: #fff;
        background: $ohs-blue;

        i {
          transform: scale(1.2);
        }
      }

      i {
        margin-right: 8px;
        font-size: 20px;
        transition: all ease-in .2s;
      }
    }

    .ohs-btn-choose {
      color: $ohs-blue;
      border: 1px solid $ohs-blue;
      background: rgba(255, 255, 255, .1);
    }
  }
}

</style>
