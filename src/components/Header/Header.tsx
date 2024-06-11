import Icon from '../../helpers/icon/Icon';

const Header = () => {
  return (
    <header className=" flex w-full px-5 py-3.5 bg-slate-50  md:px-8 py-18 xl:px-6 ">
      <button
        type="button"
        className="flex items-center stroke-black border-0 bg-transparent w-24 h-24 p-0  xl:hidden"
        aria-label="navigation"
      >
        <Icon id="menu" strokeColor="stroke-black" color="fill-black" />
      </button>
      {/* {isOpen && <Navigation close={close} />} */}
      <div className="flex gap-14 items-center ml-auto">
        <p>Theme</p>
        <p>UserInfo</p>
        {/* <Theme />
        <UserInfo /> */}
      </div>
    </header>
  );
};

export default Header;
