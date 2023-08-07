import { SetStateAction, ChangeEvent, Dispatch } from 'react';

import scss from '../../styles/Swith.module.scss';

interface ISwitch {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const Switch = ({ checked, setChecked }: ISwitch) => {
  const handleCheck = (ev: ChangeEvent<HTMLInputElement>) => {
    setChecked(ev.target.checked);
  };

  return (
    <input
      className={scss.input}
      checked={checked}
      onChange={handleCheck}
      type="checkbox"
    />
  );
};
