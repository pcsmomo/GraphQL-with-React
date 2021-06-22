import React from "react";
import { gql, useMutation } from "@apollo/client";

const LyricList = ({ lyrics }) => {
  const [likeLyric] = useMutation(LIKE_LYRIC);

  const onLike = (id) => {
    likeLyric({
      variables: { id }
    });
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => onLike(id)}>
              thumb_up
            </i>
            {likes}
          </div>
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
