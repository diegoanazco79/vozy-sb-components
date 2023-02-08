import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzBadge } from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: VzBadge,
} as ComponentMeta<typeof VzBadge>;

const Template: ComponentStory<typeof VzBadge> = (args) => <VzBadge {...args} />;

export const VozyBadge = Template.bind({});

VozyBadge.args = {
  type: 'neutral',
  text: 'Badge'
};
