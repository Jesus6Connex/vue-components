import ImageCropper from '@/components/ImageCropper'
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';

// Tailwind utility classes
import '@/assets/css/tailwind.css'
// Import custom bootstrap overrides
import '@/assets/scss/custom.scss'

export default {
  title: 'ImageCropper',
  component: ImageCropper,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    modalShow: {
      control: false,
    }
  }
};

export const actionsData = {
  onCropped: action('crop'),
  onCancel: action('cancel'),
};

const Template = (args, { argTypes }) => {
  return {
    components: { ImageCropper },
    props: Object.keys(argTypes),
    methods: actionsData,
    template: `
      <div>
      <button class="tw-px-4 tw-py-2">Open Modal</button>
      <ImageCropper
        v-bind="$props"
        @cropped="onCropped"
        @canceled="onCancel"
      />
      </div>
    `,
  };
};

export const Primary = Template.bind({});
Primary.args = {
  modalShow: true,
  img: require('@/assets/logo.png'),
  w: 50,
  h: 50
};

export const Loading = Template.bind({});
Primary.args = {
  modalShow: true,
  img: null,
  w: 50,
  h: 50
};