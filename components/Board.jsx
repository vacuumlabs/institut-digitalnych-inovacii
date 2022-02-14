import classNames from "classnames";
import Headline from "./Headline";

const BoardTile = ({ imgURL, name, position, whiteName = false }) => {
  return (
    <div className="text-center">
      <img
        className="h-auto max-h-[170px] w-full max-w-[170px] rounded-[30px] rounded-tl-none"
        src={imgURL}
        alt={name}
      />
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
    <div className="with-backdrop before:bg-default relative py-8 before:top-[200px] before:md:top-[185px] lg:py-20 before:lg:top-[275px] xl:py-28 before:xl:top-[300px]">
      <div className="container relative z-10 mx-auto">
        <Headline text="Správna rada" alignCenterLg />
        <div className="mb-20 flex justify-center space-x-6 lg:space-x-12">
          <BoardTile
            whiteName
            imgURL="https://dummyimage.com/400x400"
            name="Marián Porvažník"
            position="CEO, Vacuum Group"
          />
          <BoardTile
            whiteName
            imgURL="https://dummyimage.com/400x400"
            name="Peter Kolesár"
            position="Partner, CIVITTA"
          />
        </div>
        <span className="text-white">
          <Headline text="Projektový manažment" alignCenterLg />
        </span>
        <div className="flex items-center justify-center">
          <BoardTile
            imgURL="https://dummyimage.com/400x400"
            name="Zuzana Pisoň"
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
