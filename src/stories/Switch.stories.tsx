import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzSwitch } from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: VzSwitch,
} as ComponentMeta<typeof VzSwitch>;

const Template: ComponentStory<typeof VzSwitch> = (args) => <VzSwitch {...args} />;

export const VozySwitch = Template.bind({});

VozySwitch.args = {
};
