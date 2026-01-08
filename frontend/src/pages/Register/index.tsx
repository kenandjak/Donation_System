import logo_donate from "../../assets/donate.png";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import InputPassword from "../../components/InputPassword";

function Register() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  // Estado para mostrar erros sem usar alert
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const usernameRegex = /^[a-zA-Z]/;

    if (username.length < 5) {
      setError("Username must be at least 5 characters long.");
      return;
    }

    if (!usernameRegex.test(username)) {
      setError("Username must start with a letter.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    try {
      await api.post("/users/register", {
        username: username,
        email: emailRef.current.value,
        password: password,
      });
      alert("User successfully registered!");
      navigate("/users/login");
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message;
      setError("Error registering user: " + errorMessage);
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
          <h2 className="text-2xl xl:text-4xl font-bold mb-6">Register</h2>
        </div>
        <form
          className="w-full px-8 pb-8 flex flex-col gap-5 items-center justify-center"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="w-full xl:w-2xl bg-red-100 text-red-700 p-3 rounded-md border border-red-400 text-sm font-semibold">
              {error}
            </div>
          )}
          <input
            ref={usernameRef}
            placeholder="Username: "
            type="text"
            className="w-full xl:w-2xl px-3 py-2 xl:text-xl bg-white border border-pink-500 rounded-md focus:outline-none hover:shadow-2xl"
          />
          <input
            ref={emailRef}
            placeholder="Email: "
            type="email"
            className="w-full xl:w-2xl px-3 py-2 xl:text-xl bg-white border border-pink-500 rounded-md focus:outline-none hover:shadow-2xl"
          />
          <InputPassword ref={passwordRef} placeholder="Password: " />
          <button className="w-full xl:w-2xl xl:py-4 xl:text-2xl bg-pink-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-rose-400">
            Register
          </button>
          <Link
            to={"/users/login"}
            className="md:text-xl text-pink-700 hover:underline mt-4 block text-center"
          >
            Already have an account? Log in.
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
