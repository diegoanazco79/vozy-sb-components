import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzTable } from '../components/Table';

export default {
  title: 'Components/Table',
  component: VzTable,
} as ComponentMeta<typeof VzTable>;

const Template: ComponentStory<typeof VzTable> = (args) => <VzTable {...args} />;

export const VozyTable = Template.bind({});

VozyTable.args = {
  fields: [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'phone', label: 'Phone' }
  ],
  items: [
    { id: '3', name: 'Prueba 1', phone: '1' },
    { id: '2', name: 'Prueba 2', phone: '3' },
    { id: '1', name: 'Prueba 3', phone: '2' },
    { id: '4', name: 'Prueba 4', phone: '4' },
    { id: '5', name: 'Prueba 5', phone: '5' }
  ],
  sorter: true
};
