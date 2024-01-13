import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 pb-16 pt-24 dark:border-gray-600">
      <div className="relative mx-10vw">
        <div className="relative mx-auto grid max-w-7xl grid-cols-4 grid-rows-max-content gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
          <div className="col-span-full lg:col-span-2 xl:col-span-3">
            <div className="flex items-center justify-center lg:justify-start">
              <Link
                to="/"
                className="block whitespace-nowrap text-2xl font-medium transition focus:outline-none"
              >
                <h1>Divinely Developer</h1>
              </Link>
            </div>
          </div>
          <div className="col-span-full lg:col-span-6 xl:col-span-4">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://www.divinelydeveloper.me"
                className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
              >
                About
              </a>
              <a
                href="https://www.github.com/imankitkalirawana/"
                className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/imankitkalirawana/"
                className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.twitter.com/imankitkalirawana/"
                className="block whitespace-nowrap text-lg font-medium hover:text-slate-950 dark:hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>
          {/* copyright */}
          <div className="col-span-full lg:col-span-4 xl:col-span-5">
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <p className="text-lg font-medium text-slate-400 mt-2">
                © 2021 Divinely Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
