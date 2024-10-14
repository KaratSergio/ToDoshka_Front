import { BoardItemProps } from '../types';

const BoardItem: React.FC<BoardItemProps> = ({ board, onBoardClick }) => {
  const handleClick = () => {
    if (board._id) {
      onBoardClick(board._id);
    }
  };

  return (
    <li
      className="py-5 pl-6 cursor-pointer hover:bg-slate-500/10 relative transition-colors hover:border-r-0 before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:w-0 hover:before:w-[6px] before:bg-emerald-300
      400 before:rounded-tl-lg before:rounded-bl-lg"
      onClick={handleClick}
    >
      {board.title}
    </li>
  );
};

export default BoardItem;
