import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzRange } from '../components/Range';

export default {
  title: 'Components/Range',
  component: VzRange,
} as ComponentMeta<typeof VzRange>;

const Template: ComponentStory<typeof VzRange> = (args) => <VzRange {...args} />;

export const VozyRange = Template.bind({});

VozyRange.args = {
  leftIcon: '1',
  rightIcon: '100',
  classNameWrapper: 'w-50',
  value: 6,
  minValue: 1,
  maxValue: 100,
  showLabel: true,
  labelSymbol: 'x'
};
