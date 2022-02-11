import Logos from "./Logos";

const logos = [
  "logo-civitta",
  "logo-ajtyvit",
  "logo-fintechclub",
  "logo-ftrnw",
  "logo-gamedays",
  "logo-hubhub",
  "logo-neulogy",
  "logo-perrytalents",
  "logo-sapie",
  "logo-slovakamericanfoundation",
  "logo-sudoacademy",
  "logo-thespot",
  "logo-vacuumgroup",
  "logo-visionventures",
];

const FoundingMembers = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="font-nasa text-brand text-title-small text-center uppercase">
          Zakladajúci členovia
        </h2>
        <div className="mt-4">
          <Logos logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default FoundingMembers;
