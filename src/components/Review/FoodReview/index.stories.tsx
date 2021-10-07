import React from 'react';
import { ComponentMeta } from '@storybook/react';
import FoodReview from '.';

export default {
  title: 'Component/FoodReview',
  component: FoodReview,
} as ComponentMeta<typeof FoodReview>;

export const FoodReviewStory = () => <FoodReview name={'진라면 매운맛'} />;
