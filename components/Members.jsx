import Headline from "./Headline";
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

const otherlogos = [
  "logo-sudolabs",
  "logo-websupport",
  "logo-grindsone",
  "logo-fumbi",
  "logo-superscale",
  "logo-sparring",
  "logo-trama",
];

const Members = () => {
  return (
    <>
      <div className="with-backdrop relative py-8 before:hidden lg:py-28 lg:before:top-[350px] lg:before:block lg:before:h-[550px] xl:before:top-[275px] xl:before:h-[400px]">
        <div className="container relative z-10 mx-auto">
          <Headline
            text="Zakladajúci členovia"
            withUnderline={false}
            brandColor
            largeFontSizeLg={false}
          />
          <div className="mt-4">
            <Logos logos={logos} />
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container relative z-10 mx-auto">
          <Headline
            text="Ďalší členovia"
            withUnderline={false}
            brandColor
            largeFontSizeLg={false}
          />
          <div className="mt-4">
            <Logos logos={otherlogos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
