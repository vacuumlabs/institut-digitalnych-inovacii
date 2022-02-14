import Headline from "./Headline";
import ShadowTile from "./ShadowTile";

const ActivityTile = ({
  text,
  linkText,
  linkURL,
  brandBg = false,
  classes = "",
}) => {
  return (
    <ShadowTile brandBg={brandBg} classes={classes}>
      <div className="space-y-4 py-6 px-6 text-center sm:py-10 sm:px-8 lg:py-20 lg:px-4">
        <h3 className="lg:text-title-small font-bold">{text}</h3>
        <span className="mx-auto block h-[1px] w-[40px] bg-current" />
        <a
          href={linkURL}
          target="_blank"
          className="text-small inline-block hover:underline"
        >
          {linkText}
        </a>
      </div>
    </ShadowTile>
  );
};

const Activities = () => {
  return (
    <div className="py-8 lg:py-20 xl:py-28">
      <div className="container mx-auto">
        <Headline text="Aktivity" />
        <div className="mt-4 space-y-5 px-2 sm:px-10 md:mt-10 md:flex md:space-y-0 md:space-x-6 lg:mt-16 lg:space-y-0 lg:space-x-10 lg:px-0">
          <ActivityTile
            text="“Politiky pre lepší digitálny ekosystém 2022”"
            linkText="policy paper (PDF)"
            linkURL="#"
            classes="md:w-6/12 lg:w-4/12 xl:w-3/12"
          />
          <ActivityTile
            brandBg
            text="Konzultácie Národnej stratégie pre výskum, vývoj a inovácie"
            linkText="(PDF)"
            linkURL="#"
            classes="md:w-6/12 lg:w-4/12 xl:w-3/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
