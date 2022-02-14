import classNames from "classnames";

const Headline = ({
  text,
  withUnderline = true,
  classes = "",
  alignCenter = true,
  alignCenterLg = false,
  brandColor = false,
  largeFontSizeLg = true,
}) => {
  return (
    <h2
      className={classNames(
        withUnderline && "brand-underline",
        "font-nasa",
        "text-title-small",
        largeFontSizeLg && "lg:text-title",
        "uppercase",
        alignCenter ? "text-center" : "text-left",
        alignCenterLg ? "lg:text-center" : "lg:text-left",
        withUnderline && alignCenterLg && "lg:brand-underline--centered-lg",
        brandColor && "text-brand",
        classes
      )}
    >
      {text}
    </h2>
  );
};

export default Headline;
