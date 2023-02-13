import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzErrorMessage } from '../components/ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: VzErrorMessage,
} as ComponentMeta<typeof VzErrorMessage>;

const Template: ComponentStory<typeof VzErrorMessage> = (args) => <VzErrorMessage {...args} />;

export const VozyErrorMessage = Template.bind({});

VozyErrorMessage.args = {
  message: 'Error'
};
