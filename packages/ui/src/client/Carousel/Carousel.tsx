'use client';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Carousel = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Carousel;
