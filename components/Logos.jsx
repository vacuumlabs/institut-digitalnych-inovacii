import classNames from "classnames";
import { useState } from "react";

import ShadowTile from "./ShadowTile";

// determines how many logos are visible on a specific breakpoint
const SM_VISIBLE_LOGOS = 10;
const MD_VISIBLE_LOGOS = 12;
const LG_VISIBLE_LOGOS = 10;
const XL_VISIBLE_LOGOS = 14;

// tailwind classes have to be complete strings, no string literals allowed
// because of css optimizations, otherwise css classes would get removed from
// output stylesheet if we used literals
function getVisibilityClassnames(i) {
  return [
    i < SM_VISIBLE_LOGOS ? "sm:block" : "sm:hidden",
    i < MD_VISIBLE_LOGOS ? "md:block" : "md:hidden",
    i < LG_VISIBLE_LOGOS ? "lg:block" : "lg:hidden",
    i < XL_VISIBLE_LOGOS ? "xl:block" : "xl:hidden",
  ];
}

const Logos = ({ logos, isExpandable = false }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ShadowTile>
      <div className="grid grid-cols-2 items-center justify-items-center gap-10 p-6 sm:p-10 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7">
        {logos.map((logo, i) => (
          <img
            src={`/assets/${logo.imageUrl}.png`}
            key={logo.imageUrl}
            alt={`Logo ${logo.name}`}
            className={classNames(
              "max-h-[60px]",
              "max-w-full",
              isExpandable && !expanded && getVisibilityClassnames(i)
            )}
          />
        ))}
      </div>
      {isExpandable && (
        <div className="font-nasa text-brand text-text-small flex items-center justify-center pb-4 uppercase md:pb-6">
          <div onClick={() => setExpanded(!expanded)} role="button">
            Zobraziť {expanded ? "menej" : "viac"} členov
          </div>
        </div>
      )}
    </ShadowTile>
  );
};

export default Logos;
