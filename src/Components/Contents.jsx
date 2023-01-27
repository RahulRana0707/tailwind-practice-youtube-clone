import React from "react";
import Profile from "../Assets/Profile.jpg";
import Thumbnail from "../Assets/Coding.jpg";
import ContentCard from "./ContentCard";
const Contents = () => {
  const videos = [
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
    {
      photo: Thumbnail,
      title: "Code YouTube 2.0 with REACT.JS! (JS, HTML , CSS)",
      profile: Profile,
    },
  ];
  return (
    <div className="px-5 py-2 lg:px-6 pt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {videos.map((a) => {
        return (
          <ContentCard
            thumbnail={a.photo}
            title={a.title}
            profile={a.profile}
          />
        );
      })}
    </div>
  );
};

export default Contents;
