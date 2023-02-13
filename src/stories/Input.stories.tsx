import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzInput } from '../components/Input';

export default {
  title: 'Components/Input',
  component: VzInput,
} as ComponentMeta<typeof VzInput>;

const Template: ComponentStory<typeof VzInput> = (args) => <VzInput {...args} />;

export const VozyInput = Template.bind({});

VozyInput.args = {
  type: 'text',
  placeholder: 'Type here...'
};
