import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VzPagination } from '../components/Pagination';

export default {
  title: 'Components/Pagination',
  component: VzPagination,
} as ComponentMeta<typeof VzPagination>;

const Template: ComponentStory<typeof VzPagination> = (args) => <VzPagination {...args} />;

export const VozyPagination = Template.bind({});

VozyPagination.args = {
  currentPage: 1,
  totalPages: 10,
  loadingData: false
};
