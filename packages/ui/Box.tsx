import * as React from 'react';

interface Props {
    children?: React.ReactNode;
}

export const Box = ({ children }: Props) => {
    return (
        <div>
            <h1>Box</h1>
            {children}
        </div>
    );
};
