import React from "react";
import { useQuery, gql } from "@apollo/client";

const SongList = () => {
  const { data, loading } = useQuery(fetchSongs);

  if (loading) return <div>Loading</div>;

  const renderSongs = () => {
    return data.songs.map((song) => {
      return <li>{song.title}</li>;
    });
  };

  return <div>{renderSongs()}</div>;
};

const fetchSongs = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
