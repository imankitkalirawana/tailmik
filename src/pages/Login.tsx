import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <header className="relative mx-10vw mt-24">
        <div className="relative mx-auto max-w-4xl mb-24 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4">
          <div className="col-span-full lg:col-start-1 lg:col-span-6 pt-6">
            <h2 className="text-3xl md:text-4xl leading-tight">
              Log in to your account.
            </h2>
            <p className="text-3xl md:text-4xl leading-tight text-slate-400 mt-4">
              Or sign up for an account.
            </p>
            <div className="mt-14">
              <form
                onSubmit={formik.handleSubmit}
                className="mb-10 flex flex-col"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    className={`border-2 border-slate-800 w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium outline outline-transparent focus:outline-blue-400 focus:border-transparent transition-all ${
                      formik.errors.email && formik.touched.email
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Email address"
                    autoComplete="off"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="mt-2 form-message inline-flex items-center">
                      <span className="tooltip p-1 rounded-sm ml-2 text-red-400 text-sm">
                        {formik.errors.email}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`border-2 border-slate-800 w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium outline outline-transparent focus:outline-blue-400 focus:border-transparent transition-all ${
                      formik.errors.password && formik.touched.password
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Password"
                    autoComplete="off"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="mt-2 form-message inline-flex items-center">
                      <span className="tooltip p-1 rounded-sm ml-2 text-red-400 text-sm">
                        {formik.errors.password}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="bg-white text-black rounded-full px-10 text-lg font-medium py-5 disabled:opacity-70"
                    disabled={formik.isSubmitting}
                  >
                    Login
                  </button>
                  <Link to="/register" className="underline">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-full lg:col-start-8 lg:col-span-5 px-10">
            <img
              src="/skis_z5lkc3.webp"
              alt=""
              className="h-auto w-full object-contain aspect-[4/3]"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Login;
