import { useState } from 'react';

import { Switch } from '../switch';

import scss from '../../styles/ToggleSocialMedia.module.scss';

interface ITogleSocialMedia {
  socialMedia: string;
}

export const ToggleSocialMedia = ({ socialMedia }: ITogleSocialMedia) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={scss.wrapper}>
      <Switch checked={checked} setChecked={setChecked} />
      <p className={scss.socialMedia}>{socialMedia}</p>
    </div>
  );
};
