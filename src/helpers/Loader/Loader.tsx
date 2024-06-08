import { ThreeDots } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ThreeDots
        visible={true}
        height={80}
        width={80}
        color="var(--loader-color)"
        radius={9}
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
