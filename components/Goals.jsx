import Headline from "./Headline";
import ShadowTile from "./ShadowTile";

const goals = [
  {
    icon: "/assets/icon-goals-1.svg",
    text: "Lákanie a udržanie talentu: pracovno-právne témy",
  },
  {
    icon: "/assets/icon-goals-2.svg",
    text: "Podpora výskumu a vývoja v softvérovej oblasti",
  },
  {
    icon: "/assets/icon-goals-3.svg",
    text: "Podpora inovácií v oblasti finančných, právnych a ďalších softvérových služieb",
  },
];

const GoalTile = ({ icon, text, classes = "" }) => {
  return (
    <ShadowTile classes={classes}>
      <div className="flex items-center space-x-4 py-6 px-6">
        <img src={icon} alt="" />
        <h3 className="text-brand font-bold">{text}</h3>
      </div>
    </ShadowTile>
  );
};

const Goals = () => {
  return (
    <div className="py-8 lg:py-20 xl:py-28">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between">
          <div className="text-center lg:w-5/12 lg:text-left">
            <Headline text="Naše ciele" />
            <p className="mt-4 font-bold">
              Cieľom našej iniciatívy je zlepšiť prostredie pre fungovanie
              inovatívnych technologických firiem.
            </p>
            <p className="mt-4">
              Veríme, že tieto zmeny zároveň vedia pomôcť aj pri transformácii
              tradičnejších odvetví. Sústredíme sa na dosiahnutie legislatívnych
              a regulačných zmien v nasledujúcich oblastiach:
            </p>
          </div>
          <div className="mt-10 space-y-6 lg:mt-0 lg:w-6/12 xl:w-5/12">
            {goals.map((goal, index) => (
              <GoalTile
                {...goal}
                key={index}
                classes={index % 2 === 0 ? "md:odd:mr-20" : "md:even:ml-20"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
