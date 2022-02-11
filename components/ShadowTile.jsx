import classNames from "classnames";

const ShadowTile = ({ brandBg = false, children }) => {
  return (
    <div
      className={classNames(
        "brand-shadow",
        "rounded-[30px]",
        "rounded-tl-none",
        brandBg ? "bg-brand text-white" : "bg-white text-default"
      )}
    >
      {children}
    </div>
  );
};

export default ShadowTile;
