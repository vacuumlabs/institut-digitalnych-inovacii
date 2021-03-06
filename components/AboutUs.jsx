import { homepageData } from "../data/homepage";
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
        <Headline text={homepageData.aboutUs.title} />
        <div className="lg:mt-16 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-7/12 xl:w-5/12">
            <div className="mt-10 space-y-6 lg:mt-0">
              {homepageData.aboutUs.aboutUtItems.map((item, index) => (
                <AboutUsTile key={index} icon={item.icon} text={item.text} />
              ))}
            </div>
          </div>
          <div className="mt-20 lg:mt-0 lg:w-4/12 xl:w-2/5">
            <div className=" mx-auto flex h-auto max-h-[320px] w-full max-w-[320px] items-center justify-center lg:max-h-fit lg:max-w-full">
              <div className="bg-polygon relative flex-1 bg-contain bg-center bg-no-repeat pt-[100%]">
                <div className="absolute left-0 right-0 top-0 bottom-0 flex h-full w-full items-center justify-center p-8 sm:p-10 lg:p-14">
                  <h3 className="font-nasa text-brand text-text-large sm:text-title-small xl:text-title text-center">
                    {homepageData.aboutUs.polygonTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
