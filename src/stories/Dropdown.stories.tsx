import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzButton } from '../components/Button';
import { VzDropdown } from '../components/Dropdown';

export default {
  title: 'Components/Dropdown',
  component: VzDropdown,
} as ComponentMeta<typeof VzDropdown>;

const Template: ComponentStory<typeof VzDropdown> = (args) => <VzDropdown {...args} />;

export const VozyDropdown = Template.bind({});

VozyDropdown.args = {
  label: 'Dropdown Button',
  type: 'primary',
  setOpen: () => null,
  customMenu: <VzButton className='w-100' type='secondary' onClick={() => null} />
};
