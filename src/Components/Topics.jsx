import React from "react";
import TopicsBtn from "./TopicsBtn";
const Topics = () => {
  const topics = [
    "trending",
    "sports",
    "cars",
    "music",
    "football",
    "comdey",
    "pranks",
    "cartoons",
  ];
  return (
    <div className="flex flex-wrap items-center gap-4 capitalize px-5 py-2 lg:px-6 pt-2">
      {topics.map((i) => {
        return <TopicsBtn topics={i} />;
      })}
    </div>
  );
};

export default Topics;
