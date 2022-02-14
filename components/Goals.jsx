import { homepageData } from "../data/homepage";
import Headline from "./Headline";
import ShadowTile from "./ShadowTile";

const GoalTile = ({ icon, text, classes = "" }) => {
  return (
    <ShadowTile classes={classes}>
      <div className="flex items-center space-x-4 py-4 px-4 sm:py-6 sm:px-6">
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
            <Headline text={homepageData.goals.title} />
            <p className="mt-4 font-bold">{homepageData.goals.subtitle}</p>
            <p className="mt-4">{homepageData.goals.text}</p>
          </div>
          <div className="mt-10 space-y-6 lg:mt-0 lg:w-6/12 xl:w-5/12">
            {homepageData.goals.goalItems.map((goal, index) => (
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
