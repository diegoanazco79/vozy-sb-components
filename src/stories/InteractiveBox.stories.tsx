import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzInteractiveBox } from '../components/InteractiveBox';

export default {
  title: 'Components/InteractiveBox',
  component: VzInteractiveBox,
} as ComponentMeta<typeof VzInteractiveBox>;

const Template: ComponentStory<typeof VzInteractiveBox> = (args) => <VzInteractiveBox {...args} />;

export const VozyInteractiveBox = Template.bind({});

VozyInteractiveBox.args = {
  boxName: 'Interactive Box',
  showActionButton: true,
  classNames: 'w-25'
};
