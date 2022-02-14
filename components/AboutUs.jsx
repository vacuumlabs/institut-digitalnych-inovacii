import Headline from "./Headline";
import ShadowTile from "./ShadowTile";

const AboutUsTile = ({ icon, text }) => {
  return (
    <ShadowTile>
      <div className="flex items-center space-x-4 py-6 px-6 lg:space-x-8 lg:px-8 lg:py-10">
        <img
          src={icon}
          alt=""
          className="h-[40px] w-[40px] lg:h-[70px] lg:w-[70px]"
        />
        <h4 className="font-light">{text}</h4>
      </div>
    </ShadowTile>
  );
};

const AboutUs = () => {
  return (
    <div className="py-8 lg:py-20 xl:py-28">
      <div className="container mx-auto">
        <Headline text="Kto sme?" />
        <div className="lg:mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-7/12 xl:w-5/12">
            <div className="mt-10 space-y-6 lg:mt-0">
              <AboutUsTile
                icon="/assets/icon-about-1.svg"
                text="Sme skupina podnikateľov a inovátorov, ktorým záleží na budúcnosti Slovenska v dobe digitálnej."
              />
              <AboutUsTile
                icon="/assets/icon-about-2.svg"
                text="Preto sme založili túto nezávislú občiansku platformu, ktorá má slúžiť na presadzovanie politík, ktoré sú kľúčové pre lepšie fungovanie inovačného ekosystému."
              />
              <AboutUsTile
                icon="/assets/icon-about-3.svg"
                text="Ak chceme ostať konkurencieschopní, nemôžeme strácať čas. Nutne potrebujeme nový ekonomický model na základe inovácií a vysokej pridanej hodnoty. Veríme, že tieto zmeny pomôžu modernizovať aj tradičnejšie odvetvia."
              />
            </div>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-4/12 xl:w-2/5">
            <div className="bg-polygon mx-auto flex aspect-square max-w-[320px] items-center justify-center bg-contain bg-center bg-no-repeat p-6 lg:max-w-full">
              <h3 className="font-nasa text-brand text-text-large sm:text-title-small xl:text-title text-center">
                Sme hlasom digitálnej transformácie Slovenska
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
