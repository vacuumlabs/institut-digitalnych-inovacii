import classNames from "classnames";

const ShadowTile = ({ brandBg = false, classes = "", children }) => {
  return (
    <div
      className={classNames(
        "brand-shadow",
        "rounded-[30px]",
        "rounded-tl-none",
        brandBg ? "bg-brand text-white" : "text-default bg-white",
        classes
      )}
    >
      {children}
    </div>
  );
};

export default ShadowTile;
