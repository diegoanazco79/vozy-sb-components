import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzCollapse } from '../components/Collapse';
import { VzLabel } from '../components/Label';

export default {
  title: 'Components/Collapse',
  component: VzCollapse,
} as ComponentMeta<typeof VzCollapse>;

const Template: ComponentStory<typeof VzCollapse> = (args) => <VzCollapse {...args} />;

export const VozyCollapse = Template.bind({});

VozyCollapse.args = {
  title: 'Vozy Collapse',
  children: <VzLabel label='Children Collapse' type='default' />
};
