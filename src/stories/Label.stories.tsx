import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzLabel } from '../components/Label';

export default {
  title: 'Components/Label',
  component: VzLabel,
} as ComponentMeta<typeof VzLabel>;

const Template: ComponentStory<typeof VzLabel> = (args) => <VzLabel {...args} />;

export const VozyLabel = Template.bind({});

VozyLabel.args = {
  type: 'default',
  label: 'Type something...',
};
