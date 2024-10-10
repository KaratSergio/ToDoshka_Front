import { useEffect } from 'react';
import { useAppSelector } from '@redux/store';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectToken } from '@redux/auth/selectors';
import Start2x from '@assets/img/png/Start2x.png';
import Start1x from '@assets/img/png/Start1x.png';
import Icon from '@components/Icon/Icon';

const WelcomePage = () => {
  const navigate = useNavigate();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token === 'login' || token === '') {
      navigate('/');
    } else {
      navigate('/home');
    }
  }, [token, navigate]);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-custom-gradient bg-no-repeat">
      <div className="w-full max-w-[473px] flex justify-center flex-col">
        <div className="flex flex-col justify-center items-center">
          <picture>
            <source srcSet={Start1x} media="(max-width: 400px)" />
            <img src={Start2x} alt="Hello image" width={162} height={162} />
          </picture>
          <div className="flex items-center py-6">
            <Icon id="logo" width="w-12" height="h-12" />
            <p className="ml-[14px] font-semibold text-4xl text-bg-color">Task Pro</p>
          </div>
        </div>
        <p className="text-sm text-center text-bg-color font-normal">
          Supercharge your productivity and take control of your tasks with Task Pro - Don't wait,
          start achieving your goals now!
        </p>
        <div className="flex justify-center flex-col items-center my-10 gap-2">
          <NavLink to="/auth/register?tab=register">
            <button
              className="w-[344px] text-slate-50 text-sm hover:bg-zinc-900 bg-black py-4 rounded-lg"
              type="button"
              aria-label="Registration"
              autoFocus
            >
              Registration
            </button>
          </NavLink>
          <NavLink to="/auth/login?tab=login">
            <button
              className="w-[344px] text-black text-sm  py-4 rounded-lg"
              type="button"
              aria-label="Log In"
            >
              Log In
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
