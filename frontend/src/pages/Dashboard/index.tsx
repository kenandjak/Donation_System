import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Chart from "../../components/Chart";
import Back from "../../components/BackButton";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    async function loadUserData() {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(import.meta.env.VITE_DASHBOARD_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          console.error("Error");
        }
      } catch (err) {
        console.error("Error in the request:", err);
      }
    }

    loadUserData();
  }, []);

  return (
    <div className="flex flex-col relative min-h-screen bg-pink-300">
      <Header />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`pt-20 p-4 transition-all duration-300 ease-in-out grow ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="pl-4 pb-8 text-3xl sm:text-5xl text-pink-900 font-stackNotch font-bold">
          <h2>Welcome, {user ? user.username : "..."}!</h2>
        </div>
        <div className="pl-4 pb-8 text-xl sm:text-2xl text-pink-900 font-bold">
          <p>Your contributions over the last 6 months:</p>
        </div>
        <Chart />
        <div className="flex justify-center w-full">
          <button className="w-md mt-7 md:mt-12 md:w-2xl md:py-4 md:text-2xl bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-rose-400">
            New Donation
          </button>
        </div>
        <Back />
      </div>
      <footer className="py-4 z-10 bg-pink-900 flex items-center justify-center">
        <p className="text-xs md:text-lg text-gray-300">
          &copy; The Happy Childhood Programme is a 100% voluntarily funded
          organization.
        </p>
      </footer>
    </div>
  );
}

export default Dashboard;
