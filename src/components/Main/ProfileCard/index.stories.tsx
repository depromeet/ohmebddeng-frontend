import { Meta, Story } from '@storybook/react';
import React from 'react';
import { USER_LEVEL } from '@/types';
import ProfileCard, { ProfileCardProps } from '.';

export default {
  title: 'Main/ProfileCard',
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Level1 = Template.bind({});

Level1.args = {
  level: USER_LEVEL.맵러버,
};
