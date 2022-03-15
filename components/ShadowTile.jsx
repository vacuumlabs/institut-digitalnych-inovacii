import classNames from "classnames";

const ShadowTile = ({
  brandBg = false,
  classes = "",
  tagName = "div",
  fullHeight = false,
  children,
}) => {
  const TagName = tagName;

  return (
    <TagName
      className={classNames(
        "brand-shadow",
        "with-radius",
        brandBg ? "bg-brand text-white" : "text-default bg-white",
        fullHeight && "h-full",
        classes
      )}
    >
      {children}
    </TagName>
  );
};

export default ShadowTile;
