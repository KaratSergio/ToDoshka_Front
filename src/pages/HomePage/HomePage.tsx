import React from 'react';
import Icon from '../../helpers/icon/Icon';

const HomePage = () => {
  return (
    <div>
      <h3>Home page</h3>
      {/* тест імпорт іконка */}
      <Icon
        id="icon-icon-plus"
        strokeColor="stroke-red-500"
        color="fill-white"
      />
      <p>Board default / New board</p>
    </div>
  );
};

export default HomePage;
