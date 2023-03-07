import { cx } from 'class-variance-authority';
import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

interface FlexProps extends HTMLAttributes<HTMLElement> {
  as:
    | 'div'
    | 'span'
    | 'section'
    | 'article'
    | 'header'
    | 'footer'
    | 'main'
    | 'nav'
    | 'aside';
  className?: string;

  children: ReactNode;
}

const Flex = forwardRef(
  ({ children, as = 'div', className = '', ...props }: FlexProps, ref) => {
    return createElement(
      as,
      {
        className: cx(['flex', 'w-full', className]),
        ref,
        ...props,
      },
      children
    );
  }
);

Flex.displayName = 'Flex';

export default Flex;
