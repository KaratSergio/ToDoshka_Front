import Icon from '../Icon/Icon';
import UserInfo from './UserInfo/UserInfo';
import ThemeSwitcher from '../Theme/ThemeSwitcher';

const Header = () => {
  return (
    <header className=" flex min-w-80  px-5 py-3.5 bg-[var(--bg-header)]  md:px-8 xl:px-6 ">
      <button
        type="button"
        className="flex items-center stroke-black border-0 bg-transparent w-24 h-24 p-0  xl:hidden"
        aria-label="navigation"
      >
        <Icon id="menu" strokeColor="stroke-black" color="fill-black" />
      </button>
      {/* {isOpen && <Navigation close={close} />} */}
      <div className="flex gap-14 items-center ml-auto">
        <ThemeSwitcher />
        <UserInfo />
      </div>
    </header>
  );
};

export default Header;
