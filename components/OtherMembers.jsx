import Logos from "./Logos";

const logos = [
  "logo-fumbi",
  "logo-grindsone",
  "logo-sudolabs",
  "logo-websupport",
  "logo-superscale",
  "logo-trama",
  "logo-sparring",
];

const OtherMembers = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="font-nasa text-brand text-title-small text-center uppercase">
          Ďalší členovia
        </h2>
        <div className="mt-4">
          <Logos logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default OtherMembers;
