import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(3, "Too short")
        .max(50, "Too long"),
      email: Yup.string().email("Invalid email address").required("Required"),
      username: Yup.string()
        .required("Required")
        .min(3, "Too short")
        .max(25, "Too long"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
          "Must contain at least 6 characters, one uppercase, one lowercase, one number and one special case character"
        )
        .min(6, "Too short")
        .max(50, "Too long"),
      confirm_password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    onSubmit: (values) => {
      console.log("Submitting form with values:", values);
    },
  });

  return (
    <div>
      <header className="relative mx-10vw mt-24">
        <div className="relative mx-auto max-w-4xl mb-24 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4">
          <div className="col-span-full lg:col-start-1 lg:col-span-6 pt-6">
            <h2 className="text-3xl md:text-4xl leading-tight">
              Create an account.
            </h2>
            <p className="text-3xl md:text-4xl leading-tight text-slate-400 mt-4">
              Or login to an existing account.
            </p>
            <div className="mt-14">
              <form
                className="mb-10 flex flex-col"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-6 relative">
                  <label
                    htmlFor="name"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`border-2 border-slate-800 w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium outline outline-transparent focus:outline-blue-400 focus:border-transparent transition-all ${
                      formik.errors.name && formik.touched.name
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Name"
                    autoComplete="off"
                    id="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="mt-2 form-message inline-flex items-center">
                      <span className="tooltip p-1 rounded-sm ml-2 text-red-400 text-sm">
                        {formik.errors.name}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
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
                    onChange={formik.handleChange}
                    value={formik.values.email}
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
                    htmlFor="username"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className={`border-2 border-slate-800 w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium outline outline-transparent focus:outline-blue-400 focus:border-transparent transition-all ${
                      formik.errors.username && formik.touched.username
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Username"
                    autoComplete="off"
                    id="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username && formik.touched.username ? (
                    <div className="mt-2 form-message inline-flex items-center">
                      <span className="tooltip p-1 rounded-sm ml-2 text-red-400 text-sm">
                        {formik.errors.username}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-6 relative">
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
                    onChange={formik.handleChange}
                    value={formik.values.password}
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
                  {/* show and hide password icon fontawesome */}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirm_password"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`border-2 border-slate-800 w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium outline outline-transparent focus:outline-blue-400 focus:border-transparent transition-all ${
                      formik.errors.confirm_password &&
                      formik.touched.confirm_password
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    id="confirm_password"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                  />
                  {formik.errors.confirm_password &&
                  formik.touched.confirm_password ? (
                    <div className="mt-2 form-message inline-flex items-center">
                      <span className="tooltip p-1 rounded-sm ml-2 text-red-400 text-sm">
                        {formik.errors.confirm_password}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="bg-white text-black rounded-full px-10 text-lg font-medium py-5 disabled:opacity-70"
                    type="submit"
                    disabled={!formik.isValid}
                    onClick={() => {
                      // scroll to result
                      const result = document.getElementById("result");
                      result?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Create an Account
                  </button>
                  <Link to="/login" className="underline">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-full lg:col-start-8 px-10">
            <img
              src="/skis_z5lkc3.webp"
              alt="banner"
              className="hidden lg:block h-auto w-full object-contain aspect-[4/3]"
            />
            {/* form data result after submitting*/}
            <div id="result">
              {formik.isSubmitting && (
                <div className="form-data bg-slate-800 p-8 mt-8 rounded-xl overflow-x-scroll">
                  <pre>
                    <span>{"{"}</span>
                    <br />
                    <span className="ml-4 text-green-600">
                      name:{" "}
                      <span className="text-purple-600">
                        {" "}
                        {formik.values.name}
                      </span>
                    </span>
                    <br />
                    <span className="ml-4 text-green-600">
                      email:
                      <span className="text-purple-600">
                        {" "}
                        {formik.values.email}
                      </span>
                    </span>
                    <br />
                    <span className="ml-4 text-green-600">
                      username:
                      <span className="text-purple-600">
                        {" "}
                        {formik.values.username}
                      </span>
                    </span>
                    <br />
                    <span>{"}"}</span>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Register;
