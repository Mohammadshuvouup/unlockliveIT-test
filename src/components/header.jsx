import React , {useState} from 'react';
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full inset-x-0 top-0 z-50 shadow-md md:shadow-none border-b border-EerieBlack/10">
      <div className="flex items-center z-0 py-3 container md:py-6">
        <ul className={`${openMenu ? 'flex' : 'hidden md:flex' } py-5 md:py-0 shadow-md md:shadow-none flex-col md:flex-row absolute md:relative w-full md:w-auto inset-x-0 bg-white text-left z-10 text-secondary top-[64px] md:top-0`}>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link to={"/"}>Pages</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link to={"/"}>Menu</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link to={"/"}>Contact Us</Link>
          </li>
        </ul>
        <Link to={"/"} className="block md:mx-auto">
          <img src="assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="hidden md:flex items-center">
          <IoSearchSharp className="text-lg"/>
          <GrFavorite className="text-lg mx-6"/>
          <BsCart2 className="text-lg"/>
        </div>
        <div className="hidden md:flex items-center ml-20 gap-4">
          <img src="assets/icons/Admin.svg" alt="admin-icon" />
          <Link className="flex-none" to={"/"}>Sign in</Link>
        </div>
          <RxHamburgerMenu
            onClick={()=> setOpenMenu(!openMenu)}
            className="text-black text-3xl md:hidden ml-auto"
        />
      </div>
    </nav>
  );
};
export default Header;
