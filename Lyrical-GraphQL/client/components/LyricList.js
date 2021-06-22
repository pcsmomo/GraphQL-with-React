import React from "react";
import { gql } from "@apollo/client";

const LyricList = ({ lyrics }) => {
  const onLike = (id) => {
    console.log(id);
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <i className="material-icons" onClick={() => onLike(id)}>
            thumb_up
          </i>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricList;
