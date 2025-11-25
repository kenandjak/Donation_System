import { FaArrowLeft } from "react-icons/fa";

const Back = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      className="w-20 md:w-28 mt-7 ml-6 text-lg md:text-2xl font-semibold text-pink-700 hover:underline hover:text-rose-400 rounded-md flex items-center"
      onClick={handleBack}
    >
      <FaArrowLeft className="mr-2" />
      <div>Back</div>
    </button>
  );
};

export default Back;
