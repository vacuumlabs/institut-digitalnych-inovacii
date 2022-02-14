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
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="font-nasa font-normal hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
                    className="font-nasa text-title-small font-normal"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
