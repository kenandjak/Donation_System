import logo_donate from "../../assets/donate.png";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import InputPassword from "../../components/InputPassword";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data: token } = await api.post("/users/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      localStorage.setItem("token", token);
      navigate("/users/login/dashboard");
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      alert("Error registering user. " + errorMessage);
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  }
  return (
    <div className="min-h-screen bg-pink-500 flex flex-col items-center md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-pink-500 p-8">
        <div>
          <img
            src={logo_donate}
            alt="Logo: two hands forming the base of a heart and a drawing of a heart above."
            className="w-28 md:w-56"
          />
        </div>
        <h2 className="px-28 pt-8 text-center text-orange-200 text-4xl xl:text-7xl text-shadow-lg font-hollyBerry font-bold mb-6">
          Happy Childhood
        </h2>
      </div>
      <div className="w-full md:w-1/2 md:min-h-screen bg-pink-300 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md flex flex-col items-center">
          <h2 className="text-2xl xl:text-4xl font-bold mb-6">
            Sign in to your account
          </h2>
        </div>
        <form
          className="w-full px-8 pb-8 flex flex-col gap-5 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            ref={emailRef}
            placeholder="Email: "
            type="email"
            className="w-full xl:w-2xl px-3 py-2 xl:text-xl bg-white border border-pink-500 rounded-md focus:outline-none hover:shadow-2xl"
          />
          <InputPassword ref={passwordRef} placeholder="Password: " />
          <button className="w-full xl:w-2xl xl:py-4 xl:text-2xl bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-rose-400">
            Login
          </button>
          <Link
            to={"/users/register"}
            className="md:text-xl text-pink-700 hover:underline mt-4 block text-center"
          >
            Don't have an account? Join now!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
