import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzTooltip } from '../components/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: VzTooltip,
} as ComponentMeta<typeof VzTooltip>;

const Template: ComponentStory<typeof VzTooltip> = (args) => <VzTooltip {...args} />;

export const VozyTooltip = Template.bind({});

VozyTooltip.args = {
  content: 'Vozy Tooltip'
};
