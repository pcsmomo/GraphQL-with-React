import React from "react";
import { useQuery, gql } from "@apollo/client";

const SongList = () => {
  const { data, loading } = useQuery(fetchSongs);

  if (loading) return <div>Loading</div>;

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          {title}
        </li>
      );
    });
  };

  return <ul className="collection">{renderSongs()}</ul>;
};

const fetchSongs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default SongList;
