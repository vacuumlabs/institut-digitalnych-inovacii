import classNames from "classnames";

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
    <div className="before:bg-default relative py-8 before:absolute before:right-0 before:top-[200px] before:left-0 before:h-[400px] before:w-full before:content-['']">
      <div className="container relative z-10 mx-auto">
        <h2 className="brand-underline font-nasa text-title-small text-center uppercase">
          Správna rada
        </h2>
        <div className="mb-20 flex justify-center space-x-6">
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
        <h2 className="brand-underline font-nasa text-title-small text-center uppercase text-white">
          Projektový manažment
        </h2>
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
