import ShadowTile from "./ShadowTile";

const AboutUsTile = ({ icon, text }) => {
  return (
    <ShadowTile>
      <div className="flex items-center space-x-4 py-6 px-6">
        <img src={icon} alt="" />
        <h4 className="font-light">{text}</h4>
      </div>
    </ShadowTile>
  );
};

const AboutUs = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="brand-underline text-center font-nasa text-title-small uppercase">
          Kto sme?
        </h2>
        <div className="mt-10 space-y-6">
          <AboutUsTile
            icon="/assets/icon-about-1.svg"
            text="Tvoríme digitálnu budúcnosť Slovenska spolu s desiatkami kľúčových inovatívnych spoločností. Veríme, že Slovensko má potenciál stať sa Estónskom či Fínskom strednej Európy.  "
          />
          <AboutUsTile
            icon="/assets/icon-about-2.svg"
            text="Ak chceme ostať konkurencieschopní v dynamickej digitálnej ekonomike, nemôžeme strácať čas. Zachrániť nás môže jedine nový ekonomický model na základe inovácií a vysokej pridanej hodnoty. "
          />
          <AboutUsTile
            icon="/assets/icon-about-3.svg"
            text="Naším cieľom je presadzovanie politík, ktoré sú kľúčové pre lepšie fungovanie technologických firiem a inovačného ekosystému na Slovensku. Zároveň veríme, že tieto zmeny pomôžu modernizovať aj tradičnejšie odvetvia.   "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
