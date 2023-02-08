import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzSteps } from '../components/Steps';

export default {
  title: 'Components/Steps',
  component: VzSteps,
} as ComponentMeta<typeof VzSteps>;

const Template: ComponentStory<typeof VzSteps> = (args) => <VzSteps {...args} />;

export const VozySteps = Template.bind({});

VozySteps.args = {
  steps: ['Step-1', 'Step-2', 'Step-3'],
  selectedStep: 'Step-2'
};
