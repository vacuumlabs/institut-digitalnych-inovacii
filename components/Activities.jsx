import { homepageData } from "../data/homepage";
import Headline from "./Headline";
import ShadowTile from "./ShadowTile";

const NewsTile = ({ text, buttonText, buttonURL, imageURL }) => {
  return (
    <ShadowTile brandBg fullHeight tagName="article">
      <div className="flex h-full flex-col-reverse items-center justify-center p-6 lg:flex-row">
        <div className="flex-[2] space-y-4 py-6 px-6 text-center lg:flex-[1] lg:pl-4 lg:pr-8">
          <h3 className="text-text-larger lg:text-title-small font-bold">
            {text}
          </h3>
          <a
            href={buttonURL}
            target="_blank"
            className="text-small text-brand font-nasa with-small-radius hover:bg-brand-light inline-block bg-white py-3 px-5"
          >
            {buttonText}
          </a>
        </div>
        <div className="flex-[1]">
          <img src={imageURL} alt="" className="with-radius" />
        </div>
      </div>
    </ShadowTile>
  );
};

const ActivityTile = ({ text, linkText, linkURL, brandBg = false }) => {
  return (
    <ShadowTile brandBg={brandBg} fullHeight tagName="article">
      <div className="flex h-full flex-col items-center justify-center p-4">
        <div className="space-y-4 p-6 text-center">
          <h3 className="text-text-larger lg:text-title-small font-bold">
            {text}
          </h3>
          <span className="mx-auto block h-[1px] w-[40px] bg-current" />
          <a
            href={linkURL}
            target="_blank"
            className="text-small inline-block hover:underline"
          >
            {linkText}
          </a>
        </div>
      </div>
    </ShadowTile>
  );
};

const Activities = () => {
  return (
    <div className="py-8 lg:py-20 xl:py-28">
      <div className="container mx-auto">
        <Headline text={homepageData.activities.title} />
        <div className="mt-4 flex-wrap space-y-5 px-2 md:-mx-5 md:mt-10 md:flex md:space-y-0 lg:mt-16">
          {homepageData.activities.items.map((activity, index) => {
            const tileClasses = activity.isNewsArticle
              ? "w-full md:w-6/12 lg:w-6/12 md:p-2 lg:p-3 xl:w-6/12"
              : "md:w-6/12 md:p-2 lg:w-3/12 lg:p-3 xl:w-3/12";

            return (
              <div className={tileClasses} key={index}>
                {activity.isNewsArticle ? (
                  <NewsTile
                    text={activity.text}
                    buttonText={activity.buttonText}
                    buttonURL={activity.buttonURL}
                    imageURL={activity.imageURL}
                  />
                ) : (
                  <ActivityTile
                    text={activity.text}
                    linkText={activity.linkText}
                    linkURL={activity.linkURL}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
