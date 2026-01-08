import { useState, forwardRef, InputHTMLAttributes } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputPasswordProps = InputHTMLAttributes<HTMLInputElement>;

const InputPassword = forwardRef(
  <HTMLInputElement, InputPasswordProps>(props, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    //const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="relative w-full xl:w-2xl">
        <input
          {...props}
          ref={ref}
          type={showPassword ? "text" : "password"}
          className="w-full px-3 py-2 xl:text-xl bg-white border border-pink-500 rounded-md focus:outline-none hover:shadow-2xl pr-12"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-600 hover:text-rose-400 transition-colors"
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </button>
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";

export default InputPassword;
