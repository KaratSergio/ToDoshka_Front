import React from 'react';
import Icon from '../../helpers/Icon/Icon';

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
