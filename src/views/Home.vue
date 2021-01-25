<template>
  <div class="ohs-home">
    <ohs-modal-dark :visible="showNewPageModal">
      <ohs-temp-list/>
    </ohs-modal-dark>
    <ohs-welcome :visible="showWelcome"
                 :logoIsCenter="!showNewPageModal"
                 @new="showNewPageModal = true"
                 @open="showNewPageModal = true"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import OhsWelcome from '@/components/Welcome.vue'
import OhsTempList from '@/components/TemplatesList.vue'
import OhsModalDark from '@/components/kits/ModalDark.vue'

export default defineComponent({
  name: 'Home',
  components: {
    OhsWelcome,
    OhsTempList,
    OhsModalDark
  },
  data() {
    return {
      showWelcome: true,
      showNewPageModal: false
    }
  },
})
</script>
<style lang="scss" scoped>
.ohs-home {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.is-edit::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  z-index: 999;
}
</style>
