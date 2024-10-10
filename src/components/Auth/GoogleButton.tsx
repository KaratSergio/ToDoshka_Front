import Icon from '../Icon/Icon';

const GoogleButton = () => {
  const handleGoogle = () => {
    window.open('http://localhost:3000/api/users/google', '_self');
  };

  return (
    <button
      onClick={handleGoogle}
      className="flex justify-center items-center mt-4 rounded-lg bg-yellow-300 text-gray-800 w-full h-[49px]"
    >
      Continue with
      <Icon
        className="ml-1 mr-1"
        id="icon-google"
        color="fill-blue-400"
        strokeColor="stroke-red"
        width="w-5"
        height="h-5"
      />
      <span className="tracking-widest font-bold">oogle</span>
    </button>
  );
};

export default GoogleButton;
