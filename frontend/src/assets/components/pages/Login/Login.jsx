/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  let URL = "https://w4fhll-4000.csb.app/login";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      axios
        .post(URL, values)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  E-Mail Address:
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2"
                    placeholder="E-Mail Address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Password:
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 "
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
              </div>

              <div className="flex items-center mb-6 -mt-4">
                <div className="flex ml-auto">
                  <a
                    href="#"
                    className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                  >
                    Forgot Your Password?
                  </a>
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2">Login</span>
                </button>
              </div>
            </form>
            <div className="mt-5 mb-5">
              <hr />
            </div>
            <div className="text-center mt-5 mb-5">Or</div>

            <NavLink>
              <div className="bg-blue-400 items-center text-center py-2 w-full text-white">
                <button>Log in with Google</button>
              </div>
            </NavLink>
          </div>

          <div className="flex justify-center items-center mt-6 font-bold text-blue-500 hover:text-blue-700 text-s">
            <NavLink to="/signup">
              <span> Don't have an account?</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
