import React from "react";
import { useQuery, gql } from "@apollo/client";

const SongList = () => {
  const response = useQuery(fetchSongs);
  console.log(response);
  return <div>SongList</div>;
};

const fetchSongs = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
