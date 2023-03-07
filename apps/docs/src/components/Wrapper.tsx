import { ReactNode, useEffect, useState } from 'react';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<number>();

  useEffect(() => {
    setState(window.screenX);
  }, []);
  return <div data-screen={state}>{children}</div>;
};

export default Wrapper;
