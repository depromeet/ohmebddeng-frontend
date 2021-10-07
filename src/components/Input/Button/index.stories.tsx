import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Input/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ width: '412px', background: '#131313', padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args} style={{ width: '100%' }} />
);

export const Contained = Template.bind({});
Contained.args = {
  buttonType: 'contained',
  color: 'red',
  children: '완료',
};

export const Outline = Template.bind({});
Outline.args = {
  buttonType: 'outline',
  color: 'green',
  rounded: true,
  children: '매워서 못 먹어요',
};
