import { createElement, ReactNode } from 'react';

const Button = ({
  children = '',
  as = 'button',
}: {
  children?: ReactNode;
  as?: 'button' | 'div' | 'span' | 'a';
}) => {
  return createElement(
    as,
    {
      className:
        'bg-blue-500 hover:bg-blue-700 text-sm text-white inline-flex leading-none items-center font-bold h-8 px-4 rounded cursor-pointer w-fit',
    },
    children
  );
};

export default Button;
