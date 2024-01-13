const Main = () => {
  return (
    <>
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-4xl mb-24 break-words">
          <div className="col-span-full lg:col-start-3 lg:col-end-11">
            <div className="flex flex-wrap">
              <ul className="col-span-full -mb-4 -mr-4 flex flex-wrap lg:col-span-10 lg:col-start-3">
                <li>
                  <a
                    href="#"
                    className="relative mb-4 mr-4 block h-auto w-auto whitespace-nowrap rounded-full px-6 py-3 bg-slate-100 outline outline-2 outline-transparent hover:outline-blue-500 hover:outline-offset-2 transition-all dark:bg-slate-900 dark:outline-offset-4"
                  >
                    Save
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="relative mb-4 mr-4 block h-auto w-auto whitespace-nowrap rounded-full px-6 py-3 bg-slate-100 outline outline-2 outline-transparent hover:outline-blue-500 hover:outline-offset-2 transition-all dark:bg-slate-900 dark:-outline-offset-4"
                  >
                    English
                  </a>
                </li>
              </ul>
              <a
                href="#"
                className="my-3 mb-6 ml-5 block text-lg font-medium hover:text-blue-500 transition underlined"
              >
                Add translation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-10vw">
        <div className="relative mx-auto max-w-4xl mb-24 break-words prose prose-light dark:prose-dark">
          <p>
            Both of these can be used to do basically the same thing, but they
            have slightly different use cases. So here are some rules for you to
            consider when deciding which <a href="">React Hook</a> to use.
          </p>
          <h2 id="useEffect">
            <a href="#useEffect">useEffect</a>
          </h2>
          <p>
            <code>useEffect</code> is a React Hook that runs after the render is
            committed to the screen. It runs after the render has been committed
            to the screen.
          </p>
          <p>
            The one catch is that this runs after react renders your component
            and ensures that your effect callback does not block browser
            painting. This differs from the behavior in class components where
            <code>componentDidMount</code> and <code>componentDidUpdate</code>
            run synchronously after rendering. It's more performant this way and
            most of the time this is what you want.
          </p>
          <p>
            However, if your effect is mutating the DOM (via a DOM node ref)
            <em>and</em>
            the DOM mutation will change the appearance of the DOM node between
            the time that it is rendered and your effect mutates it, then you
            don't want to use <code>useEffect</code>. You'll want to use
            <code>useLayoutEffect</code>. Otherwise the user could see a flicker
            when your DOM mutations take effect.
            <strong>
              This is pretty much the only time you want to avoid
              <code>useEffect</code> and use <code>useLayoutEffect</code>
              instead.
            </strong>
          </p>
          <h2 id="useLayoutEffect">
            <a href="#useLayoutEffect">useLayoutEffect</a>
          </h2>
          <p>
            <code>useLayoutEffect</code> is a React Hook that runs after the DOM
            has been updated, but before the browser has had a chance to "paint"
            those changes (the user doesn't actually see the updates until after
            the browser has repainted).
          </p>
          <p>
            It's a great place to read the DOM and synchronously cause a
            re-render. Updates scheduled inside <code>useLayoutEffect</code>
            will be flushed synchronously, before the browser has a chance to
            paint.
          </p>
          <p>
            Prefer the standard <code>useEffect</code> when possible to avoid
            blocking visual updates.
          </p>
          <h2 id="summary">
            <a href="#summary">Summary</a>
          </h2>
          <ul>
            <li>
              <code>useEffect</code> fires asynchronously (after paint).
            </li>
            <li>
              <code>useLayoutEffect</code> fires synchronously (before paint).
            </li>
            <li>
              If you're updating the DOM in <code>useEffect</code> it's too late
              — the user already saw a flicker.
            </li>
            <li>
              If you're measuring DOM nodes, you need to use
              <code>useLayoutEffect</code> because you need the DOM to be
              updated first.
            </li>
            <li>
              If you're running effects after React has performed its DOM
              updates and painted, you probably want to use
              <code>useEffect</code>.
            </li>
          </ul>
          <h2 id="one-special-case">
            <a href="#one-special-case">One Special Case</a>
          </h2>
          <p>
            One other situation you might want to use
            <code>useLayoutEffect</code> instead of <code>useEffect</code> is if
            you're updating a value (like a <code>ref</code>) and you want to
            make sure it's up-to-date before any other code runs.
          </p>
          <h2 id="conclusion">
            <a href="#conclusion">Conclusion</a>
          </h2>
          <p>
            <code>useEffect</code> and <code>useLayoutEffect</code> are very
            similar, but there are some important differences. Hopefully this
            post has helped you understand when to use each one.
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
