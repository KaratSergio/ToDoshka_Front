
import Icon from "@src/helpers/icon/Icon";
import { NavLink } from "react-router-dom";
import Start2x from '../../assets/img/png/Start2x.png'
import Start1x from '../../assets/img/png/Start1x.png'

const Welcome = () => {
  return (
    <div>
      <picture>
        <source srcSet={Start1x} media="(max-width: 400px)" />
        <img src={Start2x} alt="Hello image" />
      </picture>
      <div>
        <Icon id="logo" />
        Task Pro
      </div>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <div >
        <NavLink to="/auth/register">
          <button
            type="button"
            aria-label="Registration"
            autoFocus
          >
            Registration
          </button>
        </NavLink>
        <NavLink to="/auth/login">
          <button type="button" aria-label="Log In">
            Log In
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default Welcome;
