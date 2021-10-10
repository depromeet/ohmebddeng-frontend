import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { INITIAL_FOOD } from '@/types';
import FoodReview from '.';

export default {
  title: 'Component/FoodReview',
  component: FoodReview,
} as ComponentMeta<typeof FoodReview>;

export const FoodReviewStory = () => <FoodReview name={INITIAL_FOOD.FOOD1} />;
