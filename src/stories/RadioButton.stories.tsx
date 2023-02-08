import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzRadioButton } from '../components/RadioButton';

export default {
  title: 'Components/RadioButton',
  component: VzRadioButton,
} as ComponentMeta<typeof VzRadioButton>;

const Template: ComponentStory<typeof VzRadioButton> = (args) => <VzRadioButton {...args} />;

export const VozyRadioButton = Template.bind({});

VozyRadioButton.args = {
  checked: true,
  label: 'RadioButton',
};
