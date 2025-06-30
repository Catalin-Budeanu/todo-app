import IconDarkTheme from '../assets/dark-theme-icon.svg';
import IconWhiteTheme from '../assets/white-theme.svg';
const Navbar = ({ theme, switchTheme }) => {
  return (
    <div className="navbar-container">
      <h1>TODO</h1>
      <button onClick={switchTheme}>
        <img src={theme === 'light' ? IconDarkTheme : IconWhiteTheme} />
      </button>
    </div>
  );
};

export default Navbar;
