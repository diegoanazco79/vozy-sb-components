import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzLoadingData } from '../components/LoadingData';

export default {
  title: 'Components/LoadingData',
  component: VzLoadingData,
} as ComponentMeta<typeof VzLoadingData>;

const Template: ComponentStory<typeof VzLoadingData> = (args) => <VzLoadingData {...args} />;

export const VozyLoadingData = Template.bind({});

VozyLoadingData.args = {
  wrapperClassNames: 'justify-content-start'
};
