import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaBook,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 z-50 p-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 focus:outline-none transition-all duration-300 ${
          isOpen ? "left-4" : "left-4"
        }`}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-pink-900 text-white w-60 space-y-6 overflow-y-auto transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pb-14 mt-16 px-4">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#news"
                className="flex items-center gap-3 text-xl py-2 hover:bg-pink-800 rounded px-2"
              >
                <FaGlobe />
                <span>News</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center gap-3 text-xl py-2 hover:bg-pink-800 rounded px-2"
              >
                <FaBook />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#help"
                className="flex items-center gap-3 text-xl py-2 hover:bg-pink-800 rounded px-2"
              >
                <FaQuestionCircle />
                <span>Help</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
