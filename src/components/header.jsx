import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { BsCart2 } from "react-icons/bs";
const Header = () => {
  return (
    <nav className="w-full inset-x-0 top-0 z-50 container shadow-md md:shadow-none">
      <div className="flex items-center z-0 py-3 md:py-6">
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
        <Link className="justify-center">
          <img src="assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="flex">
          <IoSearchSharp />
          <GrFavorite />
          <BsCart2 />
        </div>
        <div>
          <img src="assets/icons/Admin.svg" alt="admin-icon" />

        </div>
      </div>
    </nav>
  );
};
export default Header;
