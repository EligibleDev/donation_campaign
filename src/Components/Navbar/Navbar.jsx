import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="navbar justify-between max-w-screen-xl mx-auto px-6 xl:px-0 py-8 bg-transparent">
      <Logo />

      <div>
        <ul className="menu menu-horizontal gap-8 px-1 hidden lg:flex">
          <Menu />
        </ul>

        <div className="dropdown">
          <label tabIndex={0} className="p-0 lg:hidden">
            <FaBars className="h-7 w-7 text-right" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] right-0 w-[calc(100vw-20px)] shadow bg-base-100 rounded-box">
            <Menu />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;