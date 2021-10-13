import { Story, Meta } from '@storybook/react';
import React from 'react';
import TitleBar, { TitleBarProps } from '.';

export default {
  title: 'Common/TitleBar',
  component: TitleBar,
  decorators: [
    (Story) => (
      <div style={{ background: '#131313' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TitleBar>;

const Template: Story<TitleBarProps> = (args) => (
  <TitleBar {...args} style={{ width: '100%' }}>
    헤더에 들어갈 내용
  </TitleBar>
);
export const Unchecked = Template.bind({});

Unchecked.args = {
  backButton: false,
};

export const Checked = Template.bind({});

Checked.args = {
  backButton: true,
};
