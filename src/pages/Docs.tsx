import { Link } from "react-router-dom";
import Header from "../components/docs/Header";
import Main from "../components/docs/Main";

const Docs = () => {
  return (
    <>
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-4xl mb-24 break-words">
          <div className="col-span-full flex justify-between lg:col-span-8 lg:col-start-3">
            <Link
              to="/"
              className="text-white flex space-x-4 focus:outline-none items-center"
              id="back-btn"
            >
              <i className="fa-solid fa-arrow-left transition"></i>
              <span className="text-lg font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
      <Header />
      <Main />
    </>
  );
};

export default Docs;
