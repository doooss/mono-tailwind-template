import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
}

const Button = ({ children }: Props) => {
    return (
        <div>
            <h1>button</h1>
            {children}
        </div>
    );
};

export default Button;
