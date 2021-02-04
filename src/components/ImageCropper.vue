<template>
  <b-modal
    v-model="modalShow"
    body-class="tw-text-center tw-p-0 tw-m-0"
    centered
    title="Crop image"
    no-close-on-backdrop
    no-close-on-esc
    hide-header-close
  >
    <template #modal-title >
      <div>
        <div class="tw-flex tw-items-center"> Crop image</div>
          <b-button
            class="close tw-mr-1 tw-mt-2 tw-absolute tw-top-0 tw-right-0 tw-flex tw-items-center hover:tw-text-white"
            @click="cancel"
          >
            <app-icon :path="mdiClose" type="mdi" :size="20"/>
          </b-button>
      </div>
    </template>
    <template #default>
      <b-spinner v-show="loading" class="tw-my-6" variant="primary" type="grow"></b-spinner>
      <cropper
        :v-show="!loading"
        :src="img"
        :stencil-props="{
        handlers: {},
        movable: false,
        scalable: false,
        }"
        :resize-image="{
        adjustStencil: false,
        }"
        :stencil-size="{
        width: w,
        height: h
        }"
        image-restriction="stencil"
        @change="onChange"
        @ready="loading=false"
      />
    </template>
    <!-- Actions -->
    <template #modal-footer>
      <div class="tw-flex tw-justify-end">
        <b-button
          class="tw-mr-1"
          variant="light"
          @click="cancel"
        >
          Discard
        </b-button>
        <b-button
          variant="primary"
          @click="accept"
        >
          Crop
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { BModal, BSpinner, BButton } from 'bootstrap-vue'
import AppIcon from '@jamescoyle/vue-icon'
import { mdiClose } from '@mdi/js'

export default {
  name: 'ImageCropper',
  components: {
    AppIcon,
    Cropper,
    BModal,
    BButton,
    BSpinner
  },
  data () {
    return {
      mdiClose,
      result: '',
      loading: true
    }
  },
  props: {
    modalShow: {
      type: Boolean,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    }
  },
  methods: {
    onChange ({ canvas }) {
      this.result = canvas.toDataURL()
    },
    accept () {
      const img = new Image()
      img.src = this.result
      img.onload = function () {
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        canvas.width = this.w
        canvas.height = this.h
        ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, this.w, this.h)
        this.$emit('cropped', canvas.toDataURL('image/png'))
      }.bind(this)
      this.loading = true
    },
    cancel () {
      this.loading = true
      this.$emit('canceled', this.img)
    }
  }
}
</script>
