<template>
  <div class="ohs-newPage-container">
    <div class="ohs-newPage-menu">
      <div class="ohs-menu-header">
        <div class="ohs-logo"></div>
        <div class="ohs-title" contenteditable="true">请输入页面名称</div>
      </div>
      <div class="ohs-menu-list">
        <div class="ohs-menu-title">
          <i class="ohs-font-icons">view_module</i>选择模版
        </div>
        <div class="ohs-menu-item"
             v-for="(item,index) in newPageMenus"
             :class="{'ohs-menu-active':currentMenuIndex === index}"
             @click="handleToMenu(index)"
        >
          {{ item.name }}
        </div>
        <div class="ohs-menu-title">
          <i class="ohs-font-icons">insert_drive_file</i>打开页面
        </div>
      </div>
      <div class="ohs-menu-footer">
        <i class="ohs-font-icons">search</i>
        <div class="ohs-search-box" :class="{'ohs-search-box-isFocus':searchBoxIsFocus}">
          <input type="text" placeholder="搜索" @focus="searchBoxIsFocus = true" @blur="searchBoxIsFocus = false">
        </div>
      </div>
    </div>
    <div class="ohs-newPage-content">
      <div class="ohs-templates-list">
        <div class="ohs-templates-title">
          登录页
        </div>
        <div class="ohs-templates-thumb" v-for="(item,index) in templatesListData" :key="index"
             :style="`background-image:url(./assets/templates/${item.thumb})`"
        >
          <div class="ohs-btn-pre">
            <i class="ohs-font-icons">visibility</i>
            预览
          </div>
          <div class="ohs-btn-add" @click="chooseTemplate(item)">
            <i class="ohs-font-icons">create</i>
            选择
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "OhsTemplatesList",
  data() {
    return {
      searchBoxIsFocus: false,
      showNewPageModal: true,
      currentMenuIndex: 0,
      newPageMenus: [
        {
          name: '基础模版'
        },
        {
          name: '高级模版'
        }
      ],
      templatesListData: []
    }
  },
  mounted() {
    this.getTemplateListData()
  },
  methods: {
    handleToMenu(index) {
      this.currentMenuIndex = index
    },
    chooseTemplate(param) {
      this.$emit('choose', param)
    },
    getTemplateListData() {
      this.$axios.get('templateList.json')
          .then(res => this.templatesListData = res.data)
    }
  }

}
</script>

<style lang="scss" scoped>
.ohs-newPage-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .ohs-newPage-menu {
    position: relative;
    width: 240px;
    height: 100%;
    padding: 0 16px;
    background: rgba(40, 30, 30, 0);
    backdrop-filter: blur(4px);
    // background-image: linear-gradient(180deg, #271F20 0%, #120C0D 100%);

    .ohs-menu-header {
      width: 100%;
      padding: 32px 0 16px 0;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, .2);

      .ohs-logo {
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: url("../assets/img/logo-abbr-hover.svg") no-repeat center;
        background-size: 100%;
        margin-right: 8px;
      }

      .ohs-title {
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, .2);
        transition: color ease-in .4s;
        outline: none;

        &:focus {
          color: rgba(255, 255, 255, 0.85);
        }
      }
    }

    .ohs-menu-list {
      padding: 8px 0 16px 0;

      .ohs-menu-title {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        color: rgba(255, 255, 255, .8);
        font-size: 14px;
        padding: 0 8px;
        margin: 8px 0;
        background: rgba(255, 255, 255, .05);
        border-radius: 4px;

        .ohs-font-icons {
          font-size: 16px;
          margin-right: 4px;
          color: rgba(255, 255, 255, .5);
        }
      }

      .ohs-menu-item {
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: rgba(255, 255, 255, .5);
        font-size: 14px;
        padding: 0 16px;
        cursor: pointer;
        transition: color ease .4s;

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }

      .ohs-menu-active {
        color: $ohs-orange;

        &:hover {
          color: $ohs-orange;
          cursor: default;
        }
      }
    }

    .ohs-menu-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      background: rgba(0, 0, 0, .5);
      color: rgba(255, 255, 255, .5);
      font-size: 12px;

      .ohs-font-icons {
        color: rgba(255, 255, 255, .5);
        margin-right: 4px;
      }

      .ohs-search-box {
        position: relative;
        width: 100%;
        height: 24px;

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 1px;
          transition: all ease .2s;
          background: $ohs-orange;
        }

        input {
          border: 0;
          outline: none;
          background: transparent;
          color: rgba(255, 255, 255, .8);
          height: 100%;
        }
      }

      .ohs-search-box-isFocus {
        &::after {
          width: 100%;
        }
      }

    }
  }

  .ohs-newPage-content {
    width: calc(100% - 240px);
    height: 100%;
    overflow-y: scroll;

    .ohs-templates-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 16px;

      .ohs-templates-title {
        width: 100%;
        padding: 16px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
        font-weight: bold;
      }

      .ohs-templates-thumb {
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 400px;
        height: 224px;
        margin: 16px 0;
        border-radius: 4px;
        overflow: hidden;
        background-size: 100%;
        background-position: top center;
        transition: all ease-in-out .2s;

        [class^="ohs-btn-"] {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 0;
          width: 96px;
          border-radius: 4px;
          background: $ohs-blue;
          color: #fff;
          opacity: 0;
          // margin-top: 80px;
          cursor: pointer;
          transform: scale(0);
          transition: all ease .5s;
          z-index: 999;

          &:hover {
            filter: contrast(1.6);
            // opacity: 1;

            i {
              transform: scale(1.3);
            }
          }

          &:nth-child(1) {
            margin-right: 16px;
          }

          i {
            font-size: 16px;
            margin-right: 8px;
            transition: transform .2s;
          }

        }

        &::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          background: rgba(0, 76, 224, 0);
          transition: all ease .3s;
          pointer-events: none;
          // z-index: 2;
        }

        &:hover {
          background-size: 120%;

          [class^="ohs-btn-"] {
            transform: scale(1);
            opacity: .8;
          }

          &::before {
            background: rgba(0, 0, 0, .7);
            // background: rgba(0, 76, 224, .3);
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0);
      border-radius: 2px;
    }

    &:hover::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, .1);
    }

    &:hover::-webkit-scrollbar-thumb {
      background: $ohs-blue;
    }
  }
}

</style>
