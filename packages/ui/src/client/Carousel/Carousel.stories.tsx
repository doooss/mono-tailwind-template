import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
    title: 'Carousel',
    component: Carousel,
    tags: ['autodocs'],
};

export default meta;

export const Default: Story = {
    args: {
        children: 'Hello World',
    },
};

type Story = StoryObj<typeof Carousel>;
