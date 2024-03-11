import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
const Header = () => {
  return (
    <nav className="w-full inset-x-0 top-0 z-50 shadow-md md:shadow-none border-b border-EerieBlack/10">
      <div className="flex items-center z-0 py-3 container md:py-6">
        <ul className="py-5 md:py-0 flex absolute md:relative w-full inset-x-0 bg-transparent text-secondary  top-[72px] md:top-0  md:justify-start">
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link>Home</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link>Pages</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link>Menu</Link>
          </li>
          <li className="px-4 text-RootBrew text-base font-medium">
            <Link>Contact Us</Link>
          </li>
        </ul>
        <Link className="block mx-auto">
          <img src="assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex items-center">
          <IoSearchSharp className="text-lg"/>
          <GrFavorite className="text-lg mx-6"/>
          <BsCart2 className="text-lg"/>
        </div>
        <div className="flex items-center ml-20 gap-4">
          <img src="assets/icons/Admin.svg" alt="admin-icon" />
          <Link className="flex-none" to={"/"}>Sign in</Link>

        </div>
      </div>
    </nav>
  );
};
export default Header;
