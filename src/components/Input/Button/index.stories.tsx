import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  buttonType: 'contained',
  color: 'green',
  rounded: true,
};

export const Outline = Template.bind({});
Outline.args = {
  buttonType: 'outline',
  color: 'green',
  rounded: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary',
  color: 'grey',
};
