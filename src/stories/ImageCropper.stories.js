/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import ImageCropper from '@/components/ImageCropper'

// Tailwind utility classes
import '@/assets/css/tailwind.css'
// Import custom bootstrap overrides
import '@/assets/scss/custom.scss'

storiesOf('ImageCropper', module)
  .add('Cropper', () => ({
    components: { ImageCropper },
    template:
    `
      <image-cropper
        :modalShow="cropper.show"
        :img="cropper.img"
        :h="cropper.height"
        :w="cropper.width"
      />
    `,
    data: () => ({
      cropper: {
        show: true,
        img: require('@/assets/logo.png'),
        height: 50,
        width: 100
      }
    })
  }))
