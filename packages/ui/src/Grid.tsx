import { cva, cx } from 'class-variance-authority';
import { ReactNode } from 'react';

const Grid = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cx([
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'bg-white',
      ])}
    >
      {children}
    </div>
  );
};

export default Grid;
