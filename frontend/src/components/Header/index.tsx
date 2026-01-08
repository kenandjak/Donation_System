import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_donate from "../../assets/donate.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/users/login");
  };

  return (
    <header className="w-full py-4 px-6 sm:py-8 bg-pink-900 flex items-center justify-end relative shadow-lg z-50">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo_donate} alt="Logo" className="w-12 md:w-20" />
      </div>

      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center focus:outline-none"
        >
          <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-pink-200 transition-colors" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-pink-700 rounded-md shadow-xl py-2 border border-pink-600">
            <Link
              to="/users/login/dashboard"
              className="block px-4 py-2 text-xl text-white hover:bg-pink-600 transition-colors font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>

            <hr className="my-1 border-pink-600" />

            <button
              onClick={handleLogout}
              className="w-full text-left block px-4 py-2 text-xl text-white hover:bg-pink-600 transition-colors font-semibold"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
