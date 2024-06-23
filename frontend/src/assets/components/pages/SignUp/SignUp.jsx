/* eslint-disable react/no-unescaped-entities */
import { NavLink, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  let URL = "https://cuddly-space-disco-6pq5x5j4w6vcrwvj-3200.app.github.dev/signup";

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
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
          console.log(err.response.data);
        });
      // navigate("/");
    },
  });

  return (
    <>
      <div className="flex py-20 flex-col items-center">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col mb-6">
                <label
                  htmlFor="fname"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2"
                    placeholder="First Name"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </div>
              </div>

              <div className="flex flex-col mb-6">
                <label
                  htmlFor="lname"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="text-sm sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2"
                    placeholder="Last Name"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </div>
              </div>

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

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                >
                  <span className="mr-2">SignUp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
