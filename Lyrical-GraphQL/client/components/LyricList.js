import React from "react";

const LyricList = ({ lyrics }) => {
  const renderLyrics = () => {
    return lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default LyricList;
