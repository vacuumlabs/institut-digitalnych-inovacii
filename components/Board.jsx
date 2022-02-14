import classNames from "classnames";
import Headline from "./Headline";

const BoardTile = ({
  imgURL,
  name,
  position,
  whiteName = false,
  linkedInUrl,
}) => {
  return (
    <div className="group text-center">
      <div className="relative mx-auto max-h-[170px] max-w-[170px]">
        <div className="bg-brand absolute left-0 right-0 top-0 bottom-0 z-[10] hidden h-full w-full items-center justify-center rounded-[30px] rounded-tl-none bg-opacity-80 text-white group-hover:flex">
          <a
            href={linkedInUrl}
            className="flex items-center justify-center space-x-2"
          >
            <img
              src="/assets/linkedin-white.svg"
              alt=""
              className="h-[20px] w-[20px]"
            />
            <span className="font-nasa text-text-small">LinkedIn</span>
          </a>
        </div>
        <img
          className="h-auto w-full rounded-[30px] rounded-tl-none"
          src={imgURL}
          alt={name}
        />
      </div>
      <h3
        className={classNames(
          "font-nasa",
          "text-text",
          "mt-3",
          whiteName ? "text-white" : "text-default"
        )}
      >
        {name}
      </h3>
      {position && (
        <h4 className="font-nasa text-brand text-text-small">{position}</h4>
      )}
    </div>
  );
};

const Board = () => {
  return (
    <div className="with-backdrop before:bg-default relative py-8 before:top-[200px] before:h-[675px] sm:before:h-[380px] before:md:top-[185px] lg:py-20 before:lg:top-[275px] xl:py-28 before:xl:top-[300px]">
      <div className="container relative z-10 mx-auto">
        <Headline text="Správna rada" alignCenterLg />
        <div className="mb-20 justify-center space-y-6 sm:flex sm:space-x-6 sm:space-y-0 lg:space-x-12">
          <BoardTile
            whiteName
            imgURL="https://dummyimage.com/400x400"
            name="Marián Porvažník"
            position="CEO, Vacuum Group"
            linkedInUrl="#"
          />
          <BoardTile
            whiteName
            imgURL="https://dummyimage.com/400x400"
            name="Peter Kolesár"
            position="Partner, CIVITTA"
            linkedInUrl="#"
          />
        </div>
        <span className="text-white">
          <Headline text="Projektový manažment" alignCenterLg />
        </span>
        <div className="flex items-center justify-center">
          <BoardTile
            imgURL="https://dummyimage.com/400x400"
            name="Zuzana Pisoň"
            linkedInUrl="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
