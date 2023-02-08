import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzCheckbox } from '../components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: VzCheckbox,
} as ComponentMeta<typeof VzCheckbox>;

const Template: ComponentStory<typeof VzCheckbox> = (args) => <VzCheckbox {...args} />;

export const VozyCheckbox = Template.bind({});

VozyCheckbox.args = {
  checked: true,
  label: 'Checkbox',
};
