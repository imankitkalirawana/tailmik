import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  // get current path from react router

  const location = useLocation();

  return (
    <div className="px-10 md:px-20 py-9 lg:py-12">
      <nav className="mx-auto flex max-w-8xl items-center justify-between">
        <div className="flex justify-center gap4 align-middle">
          <Link
            to="/"
            className="block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
          >
            <h1>The Kody</h1>
          </Link>
        </div>
        <ul className="hidden lg:flex text-slate-400">
          <li className="px-5 py-2">
            <Link
              to="/"
              className={`block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition ${
                location.pathname == "/"
                  ? "text-slate-900 dark:text-white active"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="px-5 py-2">
            <Link
              to="/docs"
              className={`block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition ${
                location.pathname == "/docs"
                  ? "text-slate-900 dark:text-white active"
                  : ""
              }`}
            >
              Docs
            </Link>
          </li>

          <li className="px-5 py-2">
            <a
              href="https://www.divinelydeveloper.me"
              className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
            >
              About
            </a>
          </li>
          <li className="px-5 py-2">
            <a
              href="https://www.github.com/imankitkalirawana/"
              className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
            >
              Github
            </a>
          </li>
        </ul>

        <div className="flex justify-center align-center">
          <div className="block">
            <Link
              to="/login"
              className="ml-4 inline-flex h-14 w-14 rounded-full justify-center items-center"
            >
              <div className="absolute rotate">
                <svg height="56" width="56" viewBox="0 0 56 56">
                  <path
                    d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
                    className="text-yellow-400"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
                    className="text-red-500"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
                    className="text-blue-500"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <img
                src="/kody_profile_gray.webp"
                alt=""
                className="inline w-10 h-10 rounded-full select-none"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
