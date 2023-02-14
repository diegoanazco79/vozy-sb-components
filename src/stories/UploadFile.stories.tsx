import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzUploadButton } from '../components/UploadFile';

export default {
  title: 'Components/UploadFile',
  component: VzUploadButton,
} as ComponentMeta<typeof VzUploadButton>;

const Template: ComponentStory<typeof VzUploadButton> = (args) => <VzUploadButton {...args} />;

export const VozyUploadFile = Template.bind({});

VozyUploadFile.args = {
  id: 'upload-file',
  btnLabel: 'Upload File'
};
