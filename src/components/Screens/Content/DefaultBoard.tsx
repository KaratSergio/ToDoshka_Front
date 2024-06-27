import { useAppDispatch } from '@redux/store';
import { openModal } from '@redux/modal/modalSlice';

const DefaultBoard: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal('AddNewBoard'));
  };

  return (
    <>
      <p className="container mx-auto p-4 text-center">
        Before starting your project, it is essential to{' '}
        <button className="text-blue-600 underline" onClick={handleClick}>
          to create a board
        </button>{' '}
        to visualize and track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective collaboration among team members.
      </p>
    </>
  );
};

export default DefaultBoard;
