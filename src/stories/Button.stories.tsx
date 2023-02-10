import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzButton } from '../components/Button';

export default {
  title: 'Components/Button',
  component: VzButton,
} as ComponentMeta<typeof VzButton>;

const Template: ComponentStory<typeof VzButton> = (args) => <VzButton {...args} />;

export const VozyButton = Template.bind({});

VozyButton.args = {
  label: 'Button',
  type: 'primary'
};
