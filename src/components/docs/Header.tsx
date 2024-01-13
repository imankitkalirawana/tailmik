const Header = () => {
  return (
    <header className="mx-10vw relative">
      <div className="relative mx-auto max-w-4xl mb-24 break-words">
        <div className="col-span-full lg:col-span-8 lg:col-start-3">
          <h2 className="leading-tight text-3xl md:text-4xl text-black dark:text-white">
            useEffect vs useLayoutEffect
          </h2>
          <p className="text-lg font-medium text-slate-400 mt-2">
            January 10th, 2024 — 3 min read
          </p>
        </div>
        <div className="col-span-full mt-10 lg:col-span-10 lg:col-start-2 lg:mt-16">
          <div className="relative aspect-[3/4] md:aspect-[3/2]">
            <img
              src="/photo-1474718723952-48d2a016108f.jpeg"
              className="absolute w-full h-full rounded-lg object-cover object-center"
              alt="header"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
