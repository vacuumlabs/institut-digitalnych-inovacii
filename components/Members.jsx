import Headline from "./Headline";
import Logos from "./Logos";

import { homepageData } from "../data/homepage";

const Members = () => {
  return (
    <>
      <div className="with-backdrop relative py-8 before:hidden lg:py-28 lg:before:top-[350px] lg:before:block lg:before:h-[550px] xl:before:top-[275px] xl:before:h-[400px]">
        <div className="container relative z-10 mx-auto">
          <Headline
            text={homepageData.members.foundingMembers.title}
            withUnderline={false}
            brandColor
            largeFontSizeLg={false}
          />
          <div className="mt-4">
            <Logos logos={homepageData.members.foundingMembers.logos} />
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container relative z-10 mx-auto">
          <Headline
            text={homepageData.members.otherMembers.title}
            withUnderline={false}
            withUnderline={false}
            brandColor
            largeFontSizeLg={false}
          />
          <div className="mt-4">
            <Logos logos={homepageData.members.otherMembers.logos} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
