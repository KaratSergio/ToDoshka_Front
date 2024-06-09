import Icon from '../../helpers/icon/Icon';

const Header = () => {
  return (
    <header className="flex w-full px-20 py-14 bg-slate-50  md:px-32 py-18 xl: py-18 ">
      <button
        type="button"
        className="block border-2 bg-transparent w-14 h-14  xl:hidden"
        aria-label="navigation"
      >
        <Icon id="menu" />
      </button>
      {/* {isOpen && <Navigation close={close} />} */}
      <div className="flex gap-3.5 items-center ml-auto">
        <p>Theme</p>
        <p>UserInfo</p>
        {/* <Theme />
        <UserInfo /> */}
      </div>
    </header>
  );
};

export default Header;
