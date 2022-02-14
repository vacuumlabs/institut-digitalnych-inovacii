import classNames from "classnames";

const Headline = ({
  text,
  withUnderline = true,
  tag = "h2",
  classes = "",
  alignCenter = true,
  alignCenterLg = false,
}) => {
  const Tag = tag;

  return (
    <Tag
      className={classNames(
        withUnderline && "brand-underline",
        "font-nasa",
        "text-title-small",
        "lg:text-title",
        "uppercase",
        alignCenter ? "text-center" : "text-left",
        alignCenterLg ? "lg:text-center" : "lg:text-left",
        withUnderline && alignCenterLg && "lg:brand-underline--centered-lg",
        classes
      )}
    >
      {text}
    </Tag>
  );
};

export default Headline;
