import ShadowTile from "./ShadowTile";

const ActivityTile = ({ text, linkText, linkURL, brandBg = false }) => {
  return (
    <ShadowTile brandBg={brandBg}>
      <div className="space-y-4 py-10 px-8 text-center">
        <h3 className="font-bold">{text}</h3>
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
    <div className="py-10">
      <div className="container mx-auto">
        <h2 className="brand-underline font-nasa text-title-small text-center uppercase">
          Aktivity
        </h2>
        <div className="mt-4 space-y-5 px-10">
          <ActivityTile
            text="“Politiky pre lepší digitálny ekosystém 2022”"
            linkText="policy paper (PDF)"
            linkURL="#"
          />
          <ActivityTile
            brandBg
            text="Konzultácie Národnej stratégie pre výskum, vývoj a inovácie"
            linkText="(PDF)"
            linkURL="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
