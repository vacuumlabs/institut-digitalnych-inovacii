import classNames from "classnames";
import { useEffect, useState } from "react";
import { homepageData } from "../data/homepage";

const Header = ({ showBlogLinks = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <header>
      <div className="container relative z-20 mx-auto flex h-[78px] items-center justify-between lg:h-[88px]">
        <h1 className="md:text-text-larger text-brand font-nasa uppercase">
          Za inovatívne Slovensko
        </h1>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6 xl:space-x-10">
            {homepageData.nav.links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className="font-nasa font-normal hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {showBlogLinks && (
              <>
                <li className="lg:border-l-default lg:ml-6 lg:border-l lg:pl-8">
                  <a
                    href={homepageData.nav.blogLinks.dennikN.url}
                    target="_blank"
                  >
                    <img
                      src={homepageData.nav.blogLinks.dennikN.logo}
                      alt={homepageData.nav.blogLinks.dennikN.label}
                      className="h-[23px] w-[106px]"
                    />
                    <span className="hidden">
                      {homepageData.nav.blogLinks.dennikN.label}
                    </span>
                  </a>
                </li>
                <li className="relative top-[3px]">
                  <a
                    href={homepageData.nav.blogLinks.smeBlog.url}
                    target="_blank"
                  >
                    <img
                      src={homepageData.nav.blogLinks.smeBlog.logo}
                      alt={homepageData.nav.blogLinks.smeBlog.label}
                      className="h-[21px] w-[71px]"
                    />
                    <span className="hidden">
                      {homepageData.nav.blogLinks.smeBlog.label}
                    </span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
        <button
          className="space-y-2 lg:hidden"
          aria-label="menu"
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
              {homepageData.nav.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="font-nasa text-text-larger sm:text-title-small font-normal"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {showBlogLinks && (
                <>
                  <li className="before:bg-brand relative pt-5 before:absolute before:top-0 before:left-0 before:h-[1px] before:w-[40px] before:content-['']">
                    <a
                      href={homepageData.nav.blogLinks.dennikN.url}
                      target="_blank"
                    >
                      <img
                        src={homepageData.nav.blogLinks.dennikN.logo}
                        alt={homepageData.nav.blogLinks.dennikN.label}
                        className="h-[30px] w-[140px]"
                      />
                      <span className="hidden">
                        {homepageData.nav.blogLinks.dennikN.label}
                      </span>
                    </a>
                  </li>
                  <li className="relative top-[3px] pt-2">
                    <a
                      href={homepageData.nav.blogLinks.smeBlog.url}
                      target="_blank"
                    >
                      <img
                        src={homepageData.nav.blogLinks.smeBlog.logo}
                        alt={homepageData.nav.blogLinks.smeBlog.label}
                        className="h-[30px] w-[100px]"
                      />
                      <span className="hidden">
                        {homepageData.nav.blogLinks.smeBlog.label}
                      </span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
