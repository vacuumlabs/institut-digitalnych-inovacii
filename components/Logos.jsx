import ShadowTile from "./ShadowTile";

const Logos = ({ logos }) => {
  return (
    <ShadowTile>
      <div className="grid grid-cols-2 items-center justify-items-center gap-10 p-10">
        {logos.map((logo) => (
          <img
            src={`/assets/${logo}.png`}
            key={logo}
            alt=""
            className="max-h-[40px] max-w-full"
          />
        ))}
      </div>
    </ShadowTile>
  );
};

export default Logos;