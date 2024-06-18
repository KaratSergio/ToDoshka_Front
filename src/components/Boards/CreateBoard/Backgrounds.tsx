import { backgrounds } from '@utils/constants';
import { RenderBackgroundsProps } from '../types';

const Backgrounds: React.FC<RenderBackgroundsProps> = ({
  selectedBackgroundName,
  handleBackgroundSelect,
}) => {
  return (
    <>
      <h3 className="text-lg font-semibold">Background</h3>
      <div className="flex gap-1 w-64 flex-wrap">
        {backgrounds.map((item) => (
          <div
            key={item.id}
            onClick={() => handleBackgroundSelect(item.name)}
            className={`w-7 h-7 cursor-pointer ${
              selectedBackgroundName === item.name ? 'border border-blue-500' : ''
            }`}
          >
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Backgrounds;
