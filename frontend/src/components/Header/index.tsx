import { Link } from "react-router-dom";
import logo_donate from "../../assets/donate.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 sm:py-8 bg-pink-900 flex items-center justify-end relative shadow-lg">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo_donate} alt="Logo" className="w-12 md:w-20" />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/profile">
          <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-pink-200" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
