import { useEffect, useState } from "react";
import redirects from "../utils/redirect.json";
import { useLocation, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const RedirectAnd404 = () => {
  const location = useLocation();
  const path = location.pathname.split("/").join("");
  const isfound = redirects.filter((e) => {
    return e.path === path;
  })[0];
  const [counter, setCounter] = useState(4);
  useEffect(() => {
    if (isfound) {
      document.title = isfound.title;
      if (counter > 0) {
        setTimeout(() => {
          setCounter(counter - 1);
        }, 1000);
      }
      if (counter === 0) {
        window.location.replace(isfound.url);
      }
    }
  }, [counter, isfound]);

  return (
    <div className="flex flex-col items-center justify-center text-white font-rubik w-screen h-screen bg-zinc-900 bg-grid">
      {isfound ? (
        <div className="text-center flex flex-col items-center">
          <div className="h-10 w-16 flex items-center justify-center">
            <div className="loader">
              <span></span>
            </div>
          </div>
          <h1 className="text-xl font-bold mt-8">Redirecting in {counter}</h1>
          <p className="mt-3">
            redirecting to{" "}
            <a className="bg-zinc-800 px-2 py-1 rounded-lg" href={isfound.url}>
              {isfound.url}
            </a>
          </p>
        </div>
      ) : (
        <>
          <h1 className="font-mono">
            <TypeAnimation
              sequence={["404 Page not found"]}
              wrapper="span"
              speed={200}
              style={{ fontSize: "1.4rem", display: "inline-block" }}
            />
          </h1>
          <Link
            to={"/"}
            className="font-mono text-lg mt-5 underline underline-offset-8 hover:text-primary transition-all duration-300 ease-in-out"
          >
            take me home
          </Link>
        </>
      )}{" "}
      <div></div>
    </div>
  );
};

export default RedirectAnd404;
