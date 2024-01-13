import { Link } from "react-router-dom";

const Login = () => {
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
              <form action="" className="mb-10 flex flex-col">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-4 inline-block text-lg text-slate-400"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    className="w-full px-10 py-8 rounded-lg bg-slate-800 text-slate-100 focus:outline-none font-medium"
                    placeholder="Email address"
                    autoComplete="off"
                    id="email"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button
                    disabled
                    className="bg-white text-black rounded-full px-10 text-lg font-medium py-5 disabled:opacity-70"
                  >
                    Email a login link
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
