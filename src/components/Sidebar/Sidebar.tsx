import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/modal/modalSlice';
import BoardsList from '../Boards/BoardsList';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(openModal('AddNewBoard'));
  };

  return (
    <div className="flex flex-col pl-6 py-6 w-260 bg-slate-300 h-screen justify-between">
      <div>
        <p>Task Pro</p>
        <p className="mt-[60px]">My boards:</p>
        <div className="flex justify-between mt-2 mr-[14px] py-[14px] items-center border-t-[1px] border-b-[1px]">
          <p>Create a new board</p>
          <button className="w-10 h-9 bg-slate-500" onClick={handleOpenModal}>
            +
          </button>
        </div>
        <BoardsList />
      </div>
      <div>
        <p>Log out</p>
      </div>
    </div>
  );
};

export default Sidebar;
