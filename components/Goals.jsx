import ShadowTile from "./ShadowTile";

const GoalTile = ({ icon, text }) => {
  return (
    <ShadowTile>
      <div className="flex items-center space-x-4 py-6 px-6">
        <img src={icon} alt="" />
        <h3 className="font-bold text-brand">{text}</h3>
      </div>
    </ShadowTile>
  );
};

const Goals = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="brand-underline text-center font-nasa text-title-small uppercase">
          Naše ciele
        </h2>
        <p className="mt-4 text-center font-bold">
          Cieľom našej iniciatívy je zlepšiť prostredie pre fungovanie
          inovatívnych technologických firiem.
        </p>
        <p className="mt-4 text-center">
          Veríme, že tieto zmeny zároveň vedia pomôcť aj pri transformácii
          tradičnejších odvetví. Sústredíme sa na dosiahnutie legislatívnych a
          regulačných zmien v nasledujúcich oblastiach:
        </p>
        <div className="mt-10 space-y-6">
          <GoalTile
            icon="/assets/icon-goals-1.svg"
            text="Lákanie a udržanie talentu: pracovno-právne témy"
          />
          <GoalTile
            icon="/assets/icon-goals-2.svg"
            text="Podpora výskumu a vývoja v softvérovej oblasti"
          />
          <GoalTile
            icon="/assets/icon-goals-3.svg"
            text="Podpora inovácií v oblasti finančných, právnych a ďalších softvérových služieb"
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
