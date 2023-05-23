import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Box = ({ children }: Props) => {
    return (
        <div>
            <h1>box</h1>
            {children}
        </div>
    );
};

export default Box;
