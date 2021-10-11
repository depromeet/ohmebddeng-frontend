import { Meta, Story } from '@storybook/react';
import React from 'react';
import { TASTE } from '@/types';
import TasteTagInput, { TasteTagInputProps } from '.';

export default {
  title: 'Common/TasteTagInput',
  component: TasteTagInput,
} as Meta<typeof TasteTagInput>;

const Template: Story<TasteTagInputProps> = (args) => (
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
