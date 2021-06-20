import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import fetchSongsQuery from "../queries/fetchSongs";

const SongCreate = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");

  // // 1st way to update cache, it only updates the cache.
  const [addSong, response] = useMutation(ADD_SONG, {
    update(cache, { data: { addSong } }) {
      cache.modify({
        fields: {
          songs(existingSongs = []) {
            const newSongRef = cache.writeFragment({
              data: addSong,
              fragment: gql`
                fragment NewSong on SongType {
                  id
                  title
                }
              `
            });
            return [...existingSongs, newSongRef];
          }
        }
      });
    }
  });

  // 2nd way to update cache, but it executes the fetching query once more
  // const [addSong, response] = useMutation(ADD_SONG, {
  //   refetchQueries: [{ query: fetchSongsQuery }]
  // });

  const onSubmit = (event) => {
    event.preventDefault();
    addSong({ variables: { title } }).then(() => history.push("/"));
    setTitle("");
    console.log(response);
  };

  return (
    <div>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title :</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default SongCreate;
