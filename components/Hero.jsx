const Hero = () => {
  return (
    <div className="bg-brand-light py-10">
      <div className="container mx-auto">
        <h1 className="text-center font-nasa text-title-small uppercase text-brand sm:text-title">
          Za inovatívne Slovensko
        </h1>
        <p className="mt-4 text-center">
          Veríme, že Slovensko má potenciál stať sa Estónskom či Fínskom
          strednej Európy.
        </p>
        <img className="mx-auto mt-4" src="/assets/hero.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
