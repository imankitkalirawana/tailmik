import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mt-10">
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:px-0">
          <img
            src="/kody_snowboarding_flying_red.webp"
            alt="Illustration of Kody the Koala standing on a snowboard surrounded by green leaves, a battery, two skies, a one-wheel, a solar panel, and a recycle logo."
            className="h-auto w-full object-contain aspect-[2/1]"
          />
        </div>
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5 mx-16">
          <h2 className="leading-tight text-3xl md:text-4xl">
            Helping people make the world a better place through quality
            software.
          </h2>
          <div className="mt-14 flex flex-col mr-auto">
            <Link
              to="/register"
              className="bg-black dark:bg-white dark:text-black rounded-full px-11 py-6 text-lg max-w-80 text-center font-medium"
            >
              Create an account
            </Link>
            <a
              href="https://www.github.com/imankitkalirawana"
              className=" dark:text-white rounded-full px-11 py-6 font-medium text-lg mt-6 border-2 dark:border-slate-500 text-center transition-all hover:border-transparent max-w-80"
            >
              <i className="fa-brands fa-github mr-4"></i>
              Github
            </a>
          </div>
          <div className="hidden lg:block mt-10">
            <a href="#intro" className="inline-flex items-center">
              <i className="fa-regular fa-arrow-down text-xl border-2 border-slate-700 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:border-slate-400"></i>
              <span className="ml-8 text-xl font-medium">What I do?</span>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-10vw relative mt-80">
          <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mt-10">
            <div className="col-span-full lg:col-span-3 flex flex-col items-center lg:block">
              <img
                src="/imankitkalirawana.webp"
                alt=""
                className="aspect-[1] rounded-lg w-full object-cover max-w-80"
              />
              <p className="text-slate-400 text-lg font-medium mt-4 text-center">
                Bhuneshvar
              </p>
            </div>
            <div className="col-span-full mt-12 lg:col-span-6 lg:col-start-6 lg:mt-0 lg:text-start">
              <h2
                className="leading-tight text-3xl md:text-4xl text-black dark:text-white"
                id="intro"
              >
                Hey, I'm Bhuneshvar. I'm on a mission to enhance the world
                through exceptional software solutions.
              </h2>
              <p className="text-2xl font-medium md:text-3xl text-gray-600 dark:text-slate-500 mt-12">
                Away from my family and computer, you'll find me cruising around
                on my onewheel, capturing moments through the lens, and
                immersing myself in the art of photography and editing.
              </p>
            </div>
          </div>
          <div className="block mt-10">
            <a
              href="https://divinelydeveloper.me"
              className="inline-flex items-center"
            >
              <i className="fa-regular fa-arrow-right text-xl border-2 border-slate-700 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:border-slate-400"></i>
              <span className="ml-8 text-xl font-medium">
                Have a visit to my Portfolio
              </span>
            </a>
          </div>
        </div>
        <div className="relative mx-10vw bg-slate-800 rounded-lg px-8 py-10 mt-80 md:py-25">
          <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl mt-10 items-center">
            <div className="col-span-full lg:col-span-4 lg:col-start-1 mb-8">
              <p className="text-2xl md:text-4xl">
                Having hard time looking for some Web Developer?
              </p>
            </div>
            <div className="col-span-full lg:col-span-4 lg:col-start-8">
              <p className="text-2xl md:text-4xl text-slate-400">
                Well, You are at the right place. I'm here to help you with your
                Web Development needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
