import Logos from "./Logos";

const logos = [
  "logo-vacuumgroup",
  "logo-civitta",
  "logo-fintechclub",
  "logo-thespot",
  "logo-perrytalents",
  "logo-sapie",
  "logo-slovakamericanfoundation",
  "logo-ftrnw",
  "logo-hubhub",
  "logo-neulogy",
  "logo-sudoacademy",
  "logo-gamedays",
  "logo-visionventures",
  "logo-ajtyvit",
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
