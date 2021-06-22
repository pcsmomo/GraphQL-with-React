import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState("");
  const [AddLyricToSong] = useMutation(ADD_LYRIC_TO_SONG);

  const onSubmit = (event) => {
    event.preventDefault();
    AddLyricToSong({
      variables: {
        content,
        songId
      }
    }).then(() => setContent(""));
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
};

const ADD_LYRIC_TO_SONG = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default LyricCreate;
