import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TASTE } from '@/types';
import TasteTagInput from '.';

export default {
  title: 'Common/TasteTagInput',
  component: TasteTagInput,
} as ComponentMeta<typeof TasteTagInput>;

const Template: ComponentStory<typeof TasteTagInput> = (args) => (
  <TasteTagInput {...args} />
);
export const Unchecked = Template.bind({});

Unchecked.args = {
  name: TASTE.매콤달콤한,
  checked: false,
};

export const Checked = Template.bind({});

Checked.args = {
  name: TASTE.매콤달콤한,
  checked: true,
};
