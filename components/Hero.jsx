const Hero = () => {
  return (
    <div className="bg-brand-light py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="text-center lg:w-7/12 lg:pr-20 lg:text-left">
            <h1 className="font-nasa text-title-small text-brand sm:text-title lg:text-title-large uppercase">
              Za inovatívne Slovensko
            </h1>
            <p className="lg:text-text-large mt-4 lg:mt-6 lg:max-w-[480px]">
              Veríme, že Slovensko má potenciál stať sa Estónskom či Fínskom
              strednej Európy.
            </p>
          </div>
          <img
            className="mx-auto mt-4 lg:mt-0 lg:w-5/12 lg:max-w-[550px]"
            src="/assets/hero.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
