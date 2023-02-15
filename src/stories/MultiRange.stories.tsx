import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzMultiRange } from '../components/MultiRange';

export default {
  title: 'Components/MultiRange',
  component: VzMultiRange,
} as ComponentMeta<typeof VzMultiRange>;

const Template: ComponentStory<typeof VzMultiRange> = (args) => <VzMultiRange {...args} />;

export const VozyRange = Template.bind({});

VozyRange.args = {
  leftIcon: '1',
  rightIcon: '100',
  minValue: 1,
  maxValue: 100,
  currentMinValue: 10,
  currentMaxValue: 20
};
