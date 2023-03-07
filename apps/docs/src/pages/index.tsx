import { ChangeEvent, useState } from 'react';
import Wrapper from 'src/components/Wrapper';
import { Button } from 'ui';

export default function Docs() {
  const [value, setValue] = useState('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <h1>Docs</h1>
      <Button>Button</Button>
      <Button as="div">Button</Button>
      <Button as="a">Button</Button>
      <Button as="span">Button</Button>

      <button
        className={
          'bg-blue-500 text-neutral-50 px-4 flex items-center rounded-sm text-sm h-8'
        }
      >
        123
      </button>
      <div className="p-2 w-56">
        <input
          type="text"
          spellCheck="true"
          value={value}
          onChange={onChangeValue}
          className={
            'inline-flex w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm'
          }
        />
      </div>
      <input type="text" />
    </Wrapper>
  );
}
