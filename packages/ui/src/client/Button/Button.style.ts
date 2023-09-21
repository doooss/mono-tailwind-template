import { cva } from 'class-variance-authority';

export const buttonStyle = cva(['p-4'], {
    variants: {
        intent: {
            primary: ['bg-blue-500', 'text-white'],
            secondary: ['bg-gray-500', 'text-white'],
        },
        size: {
            sm: ['text-sm', 'py-1', 'px-2'],
            md: ['text-md', 'py-2', 'px-4'],
            lg: ['text-lg', 'py-3', 'px-6'],
        },
    },
});
