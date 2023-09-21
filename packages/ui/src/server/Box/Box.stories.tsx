import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta: Meta<typeof Box> = {
    title: 'Box',
    component: Box,
    tags: ['autodocs'],
};

export default meta;

export const Default: Story = {
    args: {
        children: 'Hello World',
    },
};

type Story = StoryObj<typeof Box>;
