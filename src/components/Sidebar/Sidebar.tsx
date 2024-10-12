import { useAppDispatch, useAppSelector } from '@redux/store';
import { selectAllBoards } from '@redux/boards/selectors';
import { getBoardById } from '@redux/boards/thunks';
import { openModal } from '@redux/modal/modalSlice';
import { logoutThunk } from '@src/redux/auth/thunks';
import Icon from '../Icon/Icon';

import BoardsList from '../Boards/BoardsList';
import { SidebarProps } from './types';

const Sidebar: React.FC<SidebarProps> = ({ onBoardSelect }) => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectAllBoards);

  const handleOpenModal = () => {
    dispatch(openModal('AddNewBoard'));
  };

  const handleBoardClick = (boardId: string) => {
    dispatch(getBoardById(boardId));
    onBoardSelect(boardId);
  };

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className="flex flex-col py-6 w-260 text-[var(--color-font)] bg-[var(--bg-sidebar)] h-screen justify-between">
      <div>
        <p className="pl-4 w-28 bg-gray-500 rounded-r-xl">Task Pro</p>
        <p className="mt-[70px] mb-2 pl-6 text-sm">My boards: {boards.length}</p>
        <div className="flex justify-between mx-6 py-[14px] items-center border-t-[1px] border-b-[1px]">
          <p>Create a new board</p>
          <button className="w-10 h-9 bg-slate-500 rounded" onClick={handleOpenModal}>
            +
          </button>
        </div>
        <BoardsList onBoardClick={handleBoardClick} />
      </div>
      <div className="ml-6">
        <button onClick={handleLogout} className="flex gap-1 font-semibold tracking-widest">
          <Icon id="logout" width="w-6" height="h-6" />
          Exit
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
