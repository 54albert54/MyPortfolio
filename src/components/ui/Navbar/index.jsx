import { useState } from "react";

import SocialLinks from "../SocialLinks";
import NavbarLink from "../NavbarLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <header>
      
      <nav
        className={`bg-light shadow-lg sm:shadow-none  top-0  w-screen max-w-[1440px] mx-auto  md:static md:text-sm ${
          state ? "fixed z-10 h-full" : "fixed z-10"
        }`}
      >
        <MovilMenu handleNavMenu={handleNavMenu} state={state} />
        <div className="hidden sm:block">
          <div className="custom-screen items-center mx-auto md:flex">
            <div className=" bg-light z-30 justify-between h-auto  w-full max-w-[1440px]  items-center  py-1 md:py-5 md:block">
              <section className="w-full px-20 py-8 font-medium flex items-center justify-between relative">
                <NavbarLink
                  className="  mx-2 px-2 py-1 rounded-2xl transition-all duration-150 ease-linear hover:bg-slate-400"
                  activeClassName="bg-dark text-white"
                />

                <SocialLinks
                  className={` w-auto flex items-center justify-between gap-3 `}
                />
              </section>
            </div>
            <div
              className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
                state ? "" : "hidden"
              }`}
            ></div>
          </div>
        </div>

        {/* menu mobile */}
        {state && (
          <section className="relative h-full  flex flex-col mt-10">
            <NavbarLink
              actionCal={handleNavMenu}
              classMobile={"flex flex-col  text-xl gap-y-8 w-48 "}
              className="  mx-2 px-8 py-1 rounded-2xl transition-all duration-150 ease-linear hover:bg-slate-400"
              activeClassName="bg-dark text-white"
            />
            <SocialLinks
              classMobile="w-12 h-12"
              className={`absolute left-6 gap-20 top-[680px] w-auto flex items-center justify-evenly  `}
            />
          </section>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

const MovilMenu = ({ handleNavMenu, state }) => {
  return (
    <div className="md:hidden h-16 ">
      <button
        role="button"
        aria-label="Open the menu"
        className="text-gray-500 hover:text-gray-800 pl-6 h-full"
        onClick={handleNavMenu}
      >
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
