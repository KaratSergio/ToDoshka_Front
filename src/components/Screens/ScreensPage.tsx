import { useAppSelector } from '@redux/store';
import { selectAllBoards } from '@redux/boards/selectors';

import DefaultBoard from '@components/Screens/Content/DefaultBoard';
import NewBoard from '@components/Screens/Content/NewBoard';

const ScreensPage = () => {
  const boards = useAppSelector(selectAllBoards);

  return <div className="w-full">{boards.length > 0 ? <NewBoard /> : <DefaultBoard />}</div>;
};

export default ScreensPage;
