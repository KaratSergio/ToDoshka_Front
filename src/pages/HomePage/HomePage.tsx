import Icon from '../../helpers/icon/Icon';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h3>Home page</h3>
      {/* тест імпорт іконка */}
      <Icon
        id="icon-icon-plus"
        strokeColor="stroke-blue-500"
        color="fill-black"
      />
      <p>Board default / New board</p>
    </div>
  );
};

export default HomePage;
