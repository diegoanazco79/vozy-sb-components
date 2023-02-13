import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzDivider } from '../components/Divider';

export default {
  title: 'Components/Divider',
  component: VzDivider,
} as ComponentMeta<typeof VzDivider>;

const Template: ComponentStory<typeof VzDivider> = (args) => <VzDivider {...args} />;

export const VozyDivider = Template.bind({});

VozyDivider.args = {
};
