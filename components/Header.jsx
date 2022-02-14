import classNames from "classnames";
import { useEffect, useState } from "react";

const navLinks = [
  {
    label: "Naše ciele",
    url: "#goals",
  },
  {
    label: "Aktivity",
    url: "#activities",
  },
  {
    label: "Kto sme",
    url: "#about-us",
  },
  {
    label: "Kontakt",
    url: "#contact",
  },
];

const dennikNLink = {
  logo: "/assets/dennik-n.svg",
  url: "#",
  label: "Denník N",
};

const smeBlogLink = {
  logo: "/assets/sme-blog.svg",
  url: "#",
  label: "SME blog",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <header className="py-3">
      <div className="container relative z-20 mx-auto flex items-center justify-between">
        <img
          src="/assets/logo.png"
          className="h-[52px] w-[110px]"
          alt="IDI logo"
        />
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="font-nasa font-normal hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="lg:border-l-default lg:ml-6 lg:border-l lg:pl-8">
              <a href={dennikNLink.url} target="_blank">
                <img
                  src={dennikNLink.logo}
                  alt={dennikNLink.label}
                  className="h-[23px] w-[106px]"
                />
                <span className="hidden">{dennikNLink.label}</span>
              </a>
            </li>
            <li className="relative top-[3px]">
              <a href={smeBlogLink.url} target="_blank">
                <img
                  src={smeBlogLink.logo}
                  alt={smeBlogLink.label}
                  className="h-[21px] w-[71px]"
                />
                <span className="hidden">{smeBlogLink.label}</span>
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="space-y-2 lg:hidden"
          aria-label="open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bg-default h-[2px] w-[30px] rounded-sm" />
          <div className="bg-default h-[2px] w-[30px] rounded-sm" />
          <div className="bg-default h-[2px] w-[30px] rounded-sm" />
        </button>
      </div>
      <div
        className={classNames(
          "lg:hidden",
          menuOpen ? "visible" : "hidden",
          "fixed",
          "z-10",
          "w-full",
          "h-full",
          "top-0",
          "left-0",
          "bg-white",
          "pt-[76px]",
          "pl-6"
        )}
      >
        <div className="bg-brand-light ml-auto h-full w-4/5 py-6 pr-6 pl-8">
          <nav>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="font-nasa text-text-large sm:text-title-small font-normal"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="before:bg-brand relative pt-5 before:absolute before:top-0 before:left-0 before:h-[1px] before:w-[40px] before:content-['']">
                <a href={dennikNLink.url} target="_blank">
                  <img
                    src={dennikNLink.logo}
                    alt={dennikNLink.label}
                    className="h-[30px] w-[140px]"
                  />
                  <span className="hidden">{dennikNLink.label}</span>
                </a>
              </li>
              <li className="relative top-[3px] pt-2">
                <a href={smeBlogLink.url} target="_blank">
                  <img
                    src={smeBlogLink.logo}
                    alt={smeBlogLink.label}
                    className="h-[30px] w-[100px]"
                  />
                  <span className="hidden">{smeBlogLink.label}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
