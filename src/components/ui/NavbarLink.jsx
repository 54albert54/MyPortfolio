import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Features", path: "#features" },
  { name: "my toolkit", path: "#toolkit" },
  { name: "Projects", path: "#testimonials" },
];
const NavbarLink = ({classMobile, className, activeClassName ,actionCal }) => {
  const asPath = useLocation();

  let isActive = "/" == asPath.pathname && asPath.hash == "";
  const scrollTop = () => {
    const isActi = "/" == asPath.pathname;
    if (actionCal)actionCal();
    
    if (isActi) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <nav className={`${classMobile?classMobile: 'flex flex-row gap-3 items-center'}`} >
        <Link
          onClick={scrollTop}
          to={"/"}
          className={`${
            isActive ? activeClassName : " "
          }  ${className} hover:cursor-pointer`}
        >
          Home{" "}
        </Link>
        <div >
          {"/" == asPath.pathname ? (
            <NavigationLinks
            actionCal={actionCal}
            classMobile={classMobile}
              className={className}
              activeClassName={activeClassName}
              isActive={isActive}
              asPath={asPath}
            />
          ) : (
            <p className="pl-10 sm:pl-0"> {asPath.pathname.slice(1,99)}</p>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavbarLink;

const NavigationLinks = ({ isActive, asPath, className, activeClassName ,classMobile ,actionCal }) => {
  return (
    <section className={classMobile&& classMobile}>
      {navigation.map((link, index) => {
        isActive = link.path === asPath.hash;
        return (
          <a
          onClick={() => actionCal()}
            className={`${isActive ? activeClassName : " "}  ${className}`}
            key={index}
            href={link.path}
          >
            {link.name}
          </a>
        );
      })}
    </section>
  );
};
