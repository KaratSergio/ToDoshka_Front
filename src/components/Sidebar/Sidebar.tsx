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
    <div className="flex flex-col pl-6 py-6 w-260 text-[var(--color-font)] bg-[var(--bg-sidebar)] h-screen justify-between">
      <div>
        <p>Task Pro</p>
        <p className="mt-[60px]">Total boards: {boards.length}</p>
        <div className="flex justify-between mt-2 mr-[14px] py-[14px] items-center border-t-[1px] border-b-[1px]">
          <p>Create a new board</p>
          <button className="w-10 h-9 bg-slate-500" onClick={handleOpenModal}>
            +
          </button>
        </div>
        <BoardsList onBoardClick={handleBoardClick} />
      </div>
      <div>
        <button onClick={handleLogout} className="flex gap-1 font-semibold tracking-widest">
          <Icon id="logout" width="w-5" height="h-5" />
          Exit
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
